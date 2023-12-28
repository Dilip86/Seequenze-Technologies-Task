import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
    const [cards, setCards] = useState([]);
    const [selectedCard, setSelectedCard] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        imageUrl: ''
    });

    useEffect(() => {
        axios.get('https://picsum.photos/v2/list?page=1&limit=6')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handleAddCard = () => {
        if (!formData.title || !formData.description || !formData.imageUrl) {
            console.error('Please fill all fields');
            return;
        }

        axios.post('https://picsum.photos/v2/list?page=1&limit=6/add-card', formData)
            .then(response => {
                const newCard = response.data;
                setCards(prevCards => [...prevCards, newCard]);
                setFormData({
                    title: '',
                    description: '',
                    imageUrl: ''
                });
            })
            .catch(error => {
                console.error('Error adding new card:', error);
            });
    };

    const handleViewDetails = (card) => {
        setSelectedCard(card);
        setShowModal(true);
    };

    const handleEditCard = (editedCard) => {
        const cardIndex = cards.findIndex(card => card.id === editedCard.id);

        if (cardIndex !== -1) {
            const updatedCards = [...cards];
            updatedCards[cardIndex] = editedCard;
            setCards(updatedCards);
        } else {
            console.error('Card not found');
        }
    };

    const handleDeleteCard = (cardId) => {
        const confirmDeletion = window.confirm('Are you sure you want to delete this card?');

        if (confirmDeletion) {
            axios.delete(`https://picsum.photos/v2/list?page=1&limit=6/delete-card/${cardId}`)
                .then(() => {
                    const updatedCards = cards.filter(card => card.id !== cardId);
                    setCards(updatedCards);
                })
                .catch(error => {
                    console.error('Error deleting card:', error);
                });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    return (
        <div>
            <form onSubmit={handleAddCard} style={{display:'flex',flexDirection:'column',width:'360px', flexShrink:0, margin:'10px'}}>
                <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                    style={{padding:'5px', margin:'5px'}}
                />
                <input
                    type="text"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    style={{padding:'5px', margin:'5px'}}

                />
                <input
                    type="text"
                    name="imageUrl"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="Image URL"
                    style={{padding:'5px', margin:'5px'}}

                />
                <button type="submit" style={{padding:'5px',width:'150px',borderRadius:'10px',alignItems:'center', backgroundColor:'green'}}>Add Card</button>
            </form>

            <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
                {cards.map(card => (
                    <div style={{
                        border: '1px solid gray',
                        transition: 'box-shadow 0.1s ease', // Smooth transition for the box shadow
                        ':hover': {
                            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', // Box shadow on hover
                        },
                    }}>
                        <img
                            src={card.download_url}
                            alt={card.author}
                            style={{ width: '360px', height: '180px', flexShrink: 0 }}
                        />
                        <div style={{textAlign:'center', margin: '5px'}}>
                            <button onClick={() => handleViewDetails(card)} style={{backgroundColor:'green',color:'white', padding:'5px',border:'none',outline:'none',borderRadius:'5px', marginLeft:'10px'}}>View Details</button>
                            <button onClick={() => handleEditCard(card)} style={{backgroundColor:'orange',color:'white', padding:'5px',border:'none',outline:'none',borderRadius:'5px', marginLeft:'10px'}}>Edit</button>
                            <button onClick={() => handleDeleteCard(card.id)} style={{backgroundColor:'red',color:'white', padding:'5px',border:'none',outline:'none',borderRadius:'5px', marginLeft:'10px'}}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>

            {showModal && selectedCard && (
                <div
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(0, 0, 0, 0.5)' /* Semi-transparent background */
                    }}
                >
                    <div
                        style={{
                            backgroundColor: 'white',
                            padding: '20px',
                            borderRadius: '5px',
                            maxWidth: '300px' /* Set max width for the modal */
                            /* Add any other styles for your modal */
                        }}
                    >
                        <h2>{selectedCard.author}</h2>
                        <img
                            src={selectedCard.download_url}
                            alt={selectedCard.author}
                            style={{ width: '100%', maxWidth: '300px' }} /* Set image width */
                        />
                        <p>{selectedCard.width} x {selectedCard.height}</p>
                        {/* Add other details you want to display */}
                        <a href={selectedCard.download_url} download>
                            <button>Download</button>
                        </a>
                        <button onClick={() => setShowModal(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;

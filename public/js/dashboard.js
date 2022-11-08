const createDestination = async (event) => {
    event.preventDefault();

    const city = document.querySelector('#itinCity').value.trim();
    const date = document.querySelector('.datePick');
    const itin = document.querySelector('#itinCity').value.trim();


    if (city && date && itin) {
        const response = await fetch('/', {
            method: 'POST',
            body: JSON.stringify({ city, date, itin }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const deleteDestination = async (event) => {
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        const response = await fetch(`/`, {
            method: 'DELETE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete destination');
        }
    }
};


async function editDestination(event) {
    event.preventDefault();
    const city = document.querySelector('#itinCity').value.trim();
    const date = document.querySelector('.datePick');
    const itin = document.querySelector('#itinCity').value.trim();
    const response = await fetch(`/`, {
        method: 'PUT',
        body: JSON.stringify({
            city,
            date,
            itin
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace(`/dashboard`);
    } else {
        alert('Failed to edit destination');
    }
}


document
    .querySelector('.create-destination')
    .addEventListener('#saveItinBtn', createDestination);

document
    .querySelector('.delete-destination')
    .addEventListener('#deleteBtn', deleteDestination);

document
    .querySelector('.edit-destination')
    .addEventListener('#editBtn', editDestination);

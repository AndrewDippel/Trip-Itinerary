const createDestination = async (event) => {
    event.preventDefault();
    console.log("hello")

    const country = document.querySelector('#autocomplete').value.trim();
    const destination = document.querySelector('#itinCity').value;
    const date = document.querySelector('#date').value;
    const itin = document.querySelector('#itinAct').value.trim();

    console.log(country, destination, date, itin)

    if (country && destination && date && itin) {
        const response = await fetch('/api/destination/', {
            method: 'POST',
            body: JSON.stringify({ country, destination, date, itin }),
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
    .querySelector('#saveItinBtn')
    .addEventListener('click', createDestination);

document
    .querySelector('#deleteBtn')
    .addEventListener('click', deleteDestination);

document
    .querySelector('#editBtn')
    .addEventListener('click', editDestination);

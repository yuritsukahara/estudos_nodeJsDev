const event = {
	name: 'Virada Cultural',
	guestList: ['André', 'Bia', 'Ana'],
	printGuestList() {
		console.log('Lista de convidados para ' + this.name);

		this.guestList.forEach((guest) => {
			console.log(guest, 'is attending', this.name);
		});
	},
};

event.printGuestList();

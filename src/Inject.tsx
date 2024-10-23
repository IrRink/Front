function Inject() {
	function start() {
		var i = 1;
		const arr = ['아이알', '어드민', '오건호', '김민서'];
		setInterval(() => {
			const randomElement = arr[Math.floor(Math.random() * arr.length)];
			var data = {
				email: `${Math.random() * 100}@gmail.com`,
				name: `${randomElement}`,
				age: `${Math.random() * 100}`,
				password: `${Math.random() * 100}`,
				isAdmin: false,
			};

			async function inject() {
				const response = await fetch(
					'http://192.168.99.115:5000/process/adduseroruser',
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(data),
					}
				);

				if (!response.ok) {
					console.error('HTTP error', response.status);
					return;
				}

				const result = await response.json();
				console.log(result);
			}
			i = i + 1;
			inject();
		}, 10);
	}

	return (
		<div style={{ marginLeft: '1000px', marginTop: '300px' }}>
			<button onClick={start}>인젝션 공격하기</button>
		</div>
	);
}

export default Inject;

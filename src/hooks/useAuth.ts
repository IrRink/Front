import Auth from '../api/auth';
import { ADMIN_USER_KEY } from '../api/constants';

const useAuth = () => {
	const signUp = async (signupUrl: string, data: any) => {
		const singUpResponse = await Auth.fetchSignup(signupUrl, data);

		let result = await singUpResponse.text();
		result = result.replaceAll('"', '');

		if (singUpResponse.ok) {
			alert(result);
			window.location.href = '/signin';
		} else {
			alert('회원가입 실패: ' + result);
		}
	};

	const checkDuplicate = async (url: string, email: string) => {
		if (!email) {
			return '아이디를 입력해주세요.';
		}
		try {
			const result = await Auth.fetchCheckDuplicatedEmail(url, email);
			if (result) {
				if (result.exists) {
					return '이미 사용 중인 아이디입니다.';
				} else {
					return '사용 가능한 아이디입니다.';
				}
			} else {
				return '이메일 확인 오류 발생.';
			}
		} catch (erorr) {
			return '오류발생';
		}
	};

	const signIn = async (loginUrl: string, formData: any, isAdmin: boolean) => {
		try {
			const signInResponse = await Auth.fetchSginIn(loginUrl, formData);
			const data = await signInResponse.json();
			if (signInResponse.ok) {
				if (isAdmin === true) {
					localStorage.setItem('token', data.token);
					if (ADMIN_USER_KEY) {
						localStorage.setItem('id', ADMIN_USER_KEY);
					} else {
						alert('어드민 전용 키가 부여되지 않았습니다.');
						return;
					}
					alert('관리자 로그인 성공');
					console.log(data);
					localStorage.setItem('userId', data.admin.email);
					window.location.href = '/';
				} else {
					alert('로그인 성공');
					localStorage.setItem('userName', data.user.name);
					localStorage.setItem('token', data.token);
					localStorage.setItem('userId', data.user.email);
					window.location.href = '/';
				}
			} else {
				alert('로그인 실패: ' + JSON.stringify(data));
			}
		} catch (error) {
			console.log('로그인 중 오류 발생:', error);
		}
	};

	const logOut = async (apiUrl: string) => {
		try {
			const response = await Auth.fetchLogOut(apiUrl);

			if (response.ok) {
				alert('로그아웃 성공');
				localStorage.clear();
				window.location.href = '/signin';
			} else {
				alert('로그아웃 성공');
				localStorage.clear();
				window.location.href = '/signin';
			}
		} catch (error) {
			alert('로그아웃 성공');
			localStorage.clear();
			window.location.href = '/signin';
		}
	};
	const authority = async () => {
		try {
			const data = await Auth.fetchAuthority();
			if (data.user.role !== 'admin') {
				alert('현재 권한이 없습니다.');
				window.location.href = '../';
				const bool = false;
				return bool;
			} else {
				const bool = false;
				return bool;
			}
		} catch (error) {
			console.log(error);
		}
	};
	return {
		signUp,
		checkDuplicate,
		signIn,
		logOut,
		authority,
	};
};

export default useAuth;

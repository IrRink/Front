import Auth from '../api/auth';
import { API_URL } from '../api/constants';

const useAuth = () => {
	const signUp = async (data, signupUrl) => {
		const singUpResponse = await Auth.fetchSignup(signupUrl, data);
		const result = await singUpResponse.text();
		const 전역변수 = 'asdf';

		if (singUpResponse.ok) {
			alert(result);
		} else {
			alert('회원가입 실패: ' + result);
		}
	};

	const checkDuplicate = async (url, email) => {
		// checkemail api에 매개변수로 url과 이메일을 받습니다.
		// 받은 데이터를 response에 저장하고 json으로 변환한 후 result에 다시 저장합니다.
		// 만약 result 가 status가 200이라면 result에 exits가 있는지 확인합니다. 있다면
		//  false를 리턴시키고 없다면 true를 리턴시킵니다. 만약 200 이 아니라면 확인중 오류라고
		//  띄웁니다

		const result = Auth.fetchCheckDuplicatedEmail(url, email);
		// 이메일 존재 여부에 따라 결과 메시지 설정
		if (result) {
			if (result.exists) {
				alert('이미 사용 중인 아이디입니다.');
			} else {
				alert('사용 가능한 아이디입니다.');
			}
		} else {
			alert('이메일 확인 오류 발생.');
		}
	};

	return {
		signUp,
		checkDuplicate,
	};
};

export default useAuth;

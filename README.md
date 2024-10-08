    console.log(data.admin_date.split('T')[0].split('-'))
    newDate(data.admin_date.split('T')[0])
    let today=new Date();
    var nowyear: number = today.getFullYear();
    var nowmonth: number = parseInt(('0' + (today.getMonth() + 1)).slice(-2),10);
    var nowday: number = parseInt(('0' + today.getDate()).slice(-2), 10);


    // 딱봐도 타입 오류날 것 같은곳에 타입 지정
    var usuallyYear: number = parseInt(data.admin_date.split('T')[0].split('-')[0], 10);
    var usuallyMonth: number = parseInt(data.admin_date.split('T')[0].split('-')[1], 10);
    var usuallyday: number = parseInt(data.admin_date.split('T')[0].split('-')[2], 10);

    var getyear = (nowyear - usuallyYear)*365;
    var getmonth = (nowmonth - usuallyMonth)*31
    var getday = usuallyday - nowday
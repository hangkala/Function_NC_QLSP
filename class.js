let arr = [
    "Nguyễn Anh Toàn", "Vũ Minh Đức", "Nguyễn Văn Huy", "Nguyễn Đình Trình" ,"Hoàng Thu Hằng", "Dương Tiến Đạt",
    "Nguyễn Hồng Thanh", "Phạm Anh Tuấn", "Ngô Quang Trung", "Phan Khương Duy", "Đỗ Thiều Minh", "Lê Đình Dương",
    "Nguyễn Đăng Đức", "Nguyễn Mạnh Tiến", "Nguyễn Quang Phúc", "Đỗ Mạnh Hoan", "Nguyễn Minh Thịnh" ,"Đặng Văn Hoàn",
    "Nguyễn Việt Dũng", "Đàm Đình Nhu", "Nguyễn  Minh Tuấn", "Nguyễn Nhật Hoàng"];

let Students = function (name, point) {
    this.name = name;
    this.point = point;
    this.getLuckyPoint = function () {
        this.point = Math.floor(Math.random()*(1000 - 0)+0);
     //   console.log(this.point);
    };
};
function returnLuckiest() {
    let student = [];
    let points = [];
    for (let i = 0; i < arr.length; i++) {
        student[i] = new Students(arr[i], 0);
        student[i].getLuckyPoint();
        points.push(student[i].point);
    }
    ;
    let max = Math.max(...points);

    function start() {
        for (let i = 0; i < points.length; i++) {
            if (student[i].point === max) {
                let print = student[i].name.toLocaleUpperCase() + ' : có số điểm may mắn cao nhất là ' + max + '/1000';
                document.getElementById("demo").innerText = print;
            }
        }
    }
    start();
}
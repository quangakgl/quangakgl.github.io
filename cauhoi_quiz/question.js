var questions = [{
	"question": "Giải Grand Slam đầu tiên trong năm là giải nào?",
	"option1": "Austrlia mở rộng",
	"option2": "Wimbledon",
	"option3": "Roland Garos",
	"option4": "Mỹ mở rộng",
	"answer": "1"
}, {
	"question": "Cùng với Hà Nội T&T (vô địch V-League 2010), CLB nào của Việt Nam tham dự AFC Cup 2011?",
	"option1": "Sông Lam Nghệ An",
	"option2": "SHB Đà Nẵng",
	"option3": "Hoàng Anh Gia Lai",
	"option4": "Becamex Bình Dương",
	"answer": "1"
}, {
	"question": "AFC Asian Cup 2011 được tổ chức tại quốc gia nào?",
	"option1": "Qatar",
	"option2": "Hàn Quốc",
	"option3": "Nhật Bản",
	"option4": "Iraq",
	"answer": "1"
}, {
	"question": "Đội nào lên ngôi vô địch AFC Asian Cup 2011 tổ chức tại Qatar?",
	"option1": "Nhật Bản",
	"option2": "Australia",
	"option3": "Hàn Quốc",
	"option4": "Uzbekistan",
	"answer": "1"
}, {
	"question": "Ai là nhạc sĩ Việt Nam đầu tiên viết opera với tác phẩm “Cô sao” và sau đó là “Người tạc tượng”?",
	"option1": "Đỗ Nhuận",
	"option2": "Hoàng Vân",
	"option3": "Trần Hoàn",
	"option4": "Trọng Đài",
	"answer": "1"
}, {
	"question": "Sông Bến Hải và sông Thạch Hãn nằm ở tỉnh nào?",
	"option1": "Quảng Bình",
	"option2": "Quảng Ninh",
	"option3": "Quảng Trị",
	"option4": "Quảng Ngãi",
	"answer": "3"
}, {
	"question": "Trong các cây cầu sau, cầu nào là cầu xoay?",
	"option1": "Cầu Thanh Trì",
	"option2": "Cầu Thị Nại",
	"option3": "Cầu Sông Hàn",
	"option4": "Cầu Cần Thơ",
	"answer": "3"
}, {
	"question": "Đại Ngu là quốc hiệu của triều đại nào?",
	"option1": "Triều Ngô",
	"option2": "Triều Hồ",
	"option3": "Các chúa Nguyễn",
	"option4": "Nhà Tây Sơn",
	"answer": "2"
}, {
	"question": "Các vua Hùng đặt quốc hiệu nước ta là gì?",
	"option1": "Văn Lang",
	"option2": "Âu Lạc",
	"option3": "Vạn Xuân",
	"option4": "Đại Việt",
	"answer": "1"
}, {
	"question": "An Dương Vương đặt quốc hiệu nước ta là gì?",
	"option1": "Âu Lạc",
	"option2": "Vạn Xuân",
	"option3": "Đại Cồ Việt",
	"option4": "Đại Việt",
	"answer": "1"
}];
var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var arrQues = [question, question, question, question, question, question, question, question, question, question];

function loadQuestion (questionIndex) {
	var q = questions[questionIndex];
	questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
	opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
};

function loadNextQuestion () {
	var selectedOption = document.querySelector('input[type=radio]:checked');
	if(!selectedOption){
		alert('Hãy chọn một câu trả lời');
		return;
	}
	var answer = selectedOption.value;
	if(questions[currentQuestion].answer == answer){
		score += 10;
	}
	selectedOption.checked = false;
	currentQuestion++;
	if(currentQuestion == totQuestions - 1){
		nextButton.textContent = 'Finish';
	}
	if(currentQuestion == totQuestions){
		container.style.display = 'none';
		resultCont.style.display = '';
		resultCont.textContent = 'Your Score: ' + score;
		return;
	}
	loadQuestion(currentQuestion);
}

loadQuestion(currentQuestion);

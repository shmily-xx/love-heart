$(function () {
	$('#yes').click(function (event) {
		modal('我就知道你喜欢我，哈哈哈!(^_^)', function () {
			$('.page_one').addClass('hide');
			$('.page_two').removeClass('hide');
			// typeWrite();
			fireworks();

		});
	});
	$('#no').click(function (event) {
		modal('回答错误,重选!', A);
	});
});

function A() {
	return null;
}

function B() {
	modal('我知道你在等我这一句话!', C);
}

function C() {
	modal('海豚有海你有我!', D);
}

function D() {
	modal('唐僧取经我娶你!', E);
}

function E() {
	modal('这辈子我都不会让你离开我!', F);
}

function F() {
	modal('跟我走吧!', G);
}

function G() {
	modal('我会做饭!', H);
}

function H() {
	modal('爱你，么么哒！', I);
}

function I() {
	modal('行，那我们去民政局登记吧！', function () {
		fireworks();
	});
}

function fireworks() {
	$('.page_one').addClass('hide');
	$('.page_two').removeClass('hide');
	$('.page_two').fireworks({
		sound: true,
		opacity: 0.9,
		width: '100%',
		height: '100%'
	});
}
function modal(content, callback) {
	var tpl = '<div class="container">' +
		'<div class="mask"></div>' +
		'<div class="modal">' +
		'<p>' + content + '</p>' +
		'<button type="button" id="confirm" class="confirm">确定</button>' +
		'</div>' +
		'</div>';
	$('body').append(tpl);
	$(document).on('click', '.confirm', function () {
		$('.container').remove();
		callback();
	});
}
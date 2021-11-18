$(document).ready(function(){
	$('#file_jobs_cv').change(function(){
		var filename = $('#file_jobs_cv').val().split('\\').pop();
		$('#attach-resume-1').hide();
		$('#attach-resume-2').show();
		$('#file_name').html(filename);
	});
	$('#file_close').click(function(){
		$('#attach-resume-1').show();
		$('#attach-resume-2').hide();
	});
});
$(document).on('click', '.__z_jobs_header_apply', function (event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $('#job-apply').offset().top - 100
	}, 500);
});
$('#job-apply').submit(function(event){
	event.preventDefault();
	var is_valid = true;
	if ($("input[name='name']").val() == '') {
		$('#jobs_name').addClass('__z_apply_invalid');
		is_valid = false;
	} else {
		$('#jobs_name').removeClass('__z_apply_invalid');
	}
	if ($("input[name='email']").val() == '') {
		$('#jobs_email').addClass('__z_apply_invalid');
		is_valid = false;
	} else {
		$('#jobs_email').removeClass('__z_apply_invalid');
	}
	if ($("input[name='phone']").val() == '') {
		$('#jobs_phone').addClass('__z_apply_invalid');
		is_valid = false;
	} else {
		$('#jobs_phone').removeClass('__z_apply_invalid');
	}
	if ($('#file_jobs_cv').get(0).files.length === 0) {
		$('#jobs_cv').addClass('__z_apply_invalid');
		is_valid = false;
	} else {
		$('#jobs_cv').removeClass('__z_apply_invalid');
	}
	if ($('input[name="terms"]:checked').length == 0) {
		$('#jobs_terms').addClass('__z_apply_invalid');
		is_valid = false;
	} else {
		$('#jobs_terms').removeClass('__z_apply_invalid');
	}
	if (is_valid == true) {
		var formdata = new FormData($('#job-apply')[0]);
		$.ajax({
			url: '../../../base/user-nologin/form/form-job-apply',
			type: 'POST',
			data: formdata,
			dataType: 'json',
			processData: false,
			contentType: false,
			beforeSend: function(response) {
				$('#btn_send_application').prop('disabled', true);
				$('#btn_send_application').addClass('__z_jobs_send_application_button_disabled');
				$('.__z_jobs_send_application_loader_cont').show();
				$('.__z_jobs_send_application_button_text').css('opacity', 0);
			},
			success: function(response) {
				if (response == 6) {
					$('#jobs_apply_error_1').show();
				} else {
					$('#jobs_apply_error_1').hide();
				}
				if (response == 7) {
					$('#jobs_apply_error_2').show();
				} else {
					$('#jobs_apply_error_2').hide();
				}
				if (response == 8) {
					$('#jobs_apply_error_3').show();
				} else {
					$('#jobs_apply_error_3').hide();
				}
				if (
					response == 6 ||
					response == 7 ||
					response == 8
				) {
					$('.__z_jobs_apply_error').show();
					$('#btn_send_application').prop('disabled', false);
					$('#btn_send_application').removeClass('__z_jobs_send_application_button_disabled');
					$('.__z_jobs_send_application_loader_cont').hide();
					$('.__z_jobs_send_application_button_text').css('opacity', 1);
				} else if (response == 100) {
					$('.__z_jobs_apply').hide();
					$('.__z_jobs_apply_success').show();
				}
			}
		});
	}
});

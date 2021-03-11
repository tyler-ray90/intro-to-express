
$('#addSkillButton').click(function() {
    let newSkill = $('input').val();
    $('ul').append(`<li class="skill">${newSkill}</li>`);
    $('input').val('');
    });
    
    $('ul').on('click', 'li', function() {
    $(this).remove();
    });
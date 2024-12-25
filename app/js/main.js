function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
    change.target.classList.add('element-show');
    }
    });
}

let options = {threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');

for (let elm of elements) {
    observer.observe(elm);
}

$('.product__body-block-choose-wrap').on('click', function(e){
    $(this).children('select').focus()
    $(this).children('span').addClass('remove')
})
$('.search__open').on('click', function(e){
    $('.search').addClass('active')
})
$('.search-close').on('click', function(e){
    $('.search').removeClass('active')
})
$('.search__input').on('input', function(e){
    if ($(this).val() != ''){
        $('.search__resalt').addClass('active')
    }
})
$('.search__input').on('focus', function(e){
    $('.search__body-wrap').addClass('active')
})
$('.search__input').on('blur', function(e){
    $('.search__body-wrap').removeClass('active')
    if ($(this).val() == ''){
        $('.search__resalt').removeClass('active')
    }
})
$('.delete').on('click', function(e){
    $('.search__input').val('')
    $('.search__resalt').removeClass('active')
})
var splide = new Splide( '#main', {
    rewind : true,
    pagination: false
  } );
  
  splide.mount();
  var splide = new Splide( '#area', {
    rewind : true,
    pagination: false
  } );
  
  splide.mount();
  
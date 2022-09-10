'use strict'

$(function () {
  $('.btn-outline-success').on('click', (e) => {
    // 親要素のcardをクリックすると対象サイトに移動するので親要素のイベントが発動しないようにしておく
    e.stopPropagation();
    location.href = `https://gosho-techplay.com/`;
  });

  $('.card').on('click', (e) => {
    e.preventDefault();
    // 遷移するサイトを決める
    let pathName = $('.card').attr('name');
    location.href = `https://gosho-techplay.com/${pathName}`;
  });
});
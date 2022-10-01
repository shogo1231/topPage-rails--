'use strict'

$(function () {
  let herokuApps = ['rokumaru-marcket'];

  $('.btn-outline-success, .card-body').on('click', (e) => {
    // 親要素のcardをクリックすると対象サイトに移動するので親要素のイベントが発動しないようにしておく
    e.stopPropagation();
  });

  $('.card').on('click', (e) => {
    e.preventDefault();
    // 遷移するサイトを決める
    let pathName = $(e.currentTarget).attr('name')
    // デプロイ先に合わせたURL設定
    if (herokuApps.includes(pathName)) {
      location.href = `https://${pathName}.herokuapp.com`;
    }
    else {
      location.href = `https://gosho-techplay.com/${pathName}`;
    }
  });

  $('.sitetitle').on('click', (e) => {
    e.stopPropagation();
    location.href = `https://gosho-techplay.com/`;
  })
});
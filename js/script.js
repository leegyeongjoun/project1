
// $(document).ready(function (){
//     $('.slideList li').css({display:'none', opacity:0})
//     $('.slideList li.act').css({display:'block', opacity:1})
//     $('.btnNt a').click(function(){
//         let imgNum=$('.btnNt a').index(this);
//         $(this).parent().addClass('actived').siblings().removeClass();
//         $('.slideList li.act').animate({opacity:0},1000,function(){
//         $(this).css('display','none')}).removeClass('act');
//         $('.slideList li').eq(imgNum).css('display','block').animate({opacity:1},2000).addClass('act');
//     })
// })

const $next1Bt=$('.btnNext');
const $moving1=$('.slideList li');
const $start1Bt=$('.btnStart');
const $stop1Bt=$('.btnStop');
let autoa1;


autoa1 = setInterval(autoslide1,4000);
function autoslide1(){
    $moving1.stop().animate({opacity:.01},2500,function(){
         $moving1.children('li:first').insertAfter($($moving1).children("li:last"));
         $moving1.css({opacity:1});
        $('.btnNt li').addClass('active');
        
        })
}

$next1Bt.click(function(){
     $moving1.stop().animate({opacity:0},1000,function(){
         $(this).children('li:first').insertAfter($(this).children("li:last"));
         $(this).css({opacity:1});
     })
 })

$next1Bt.click(function(){
    $moving1.children("li:last").insertBefore( $moving.children("li:first"));
    //left를 this로 읽음
    //먼저 뒤에있는 친구들을 앞으로 와주게해야함
    $moving1.css({opacity:0});
    $moving1.stop().animate({opacity:1},1000);
    //없으면 끊겨서 넘어감
});
$stop1Bt.click(function(){
    clearInterval(autoa1);
})
$start1Bt.click(function(){
    autoa1 = setInterval(autoslide1,2000);
})
$('.btnStop, .btnStart, .btnNext .slideList>li').hover(function(){
    clearInterval(autoa1);
},
function(){
    autoa1 = setInterval(autoslide1,2000);
});






$(function(){
    const slideLists=$('.popupSlide li');
    const prevbtn=$('.popupbtnPrev');
    const nextbtn=$('.popupbtnNext');
    const stopbtn=$('.popupbtnStop');
    const playbtn=$('.popupbtnStart');
    let pagerBtn=$('.pager-num>p')
    let current=0;
    let setIntervalId=undefined;

    timer();
    function timer(){
        setIntervalId=setInterval(function(){
            let prev=slideLists.eq(current);
            let leftBtn=pagerBtn.eq(current);

            move(prev, 0, '-100%');
            leftBtn.removeClass('on');
            current++;

            if(current==2){
                current=0
            }

            let next=slideLists.eq(current);
            let rightbtn=pagerBtn.eq(current);
            move(next,'100%', 0);
            rightbtn.addClass('on');
        },3000);
    }
    function move(tg, start, end){
        tg.css('left', start).stop().animate({left:end},500);
    }

    $('.popupSlide li, .popupbtnPrev, .popupbtnNext').hover(function(){
        clearInterval(setIntervalId)
    },function(){
        timer();
    });
    nextbtn.click(function(){
        let prev=slideLists.eq(current);
        let leftBtn=pagerBtn.eq(current);

            move(prev, 0, '-100%');
            leftBtn.removeClass('on');
            current++;
            if(current==2){current=0}

            let next=slideLists.eq(current);
            let rightBtn=pagerBtn.eq(current);
            move(next,'100%', 0);
            rightBtn.addClass('on');
            
    })
    prevbtn.click(function(){
        let prev=slideLists.eq(current);
        let leftbtn=pagerBtn.eq(current);

        move(prev, 0, '100%');
        leftbtn.removeClass('on');
        current--;

        if(current==-2){current=0}
        
        let next=slideLists.eq(current);
        let rightBtn=pagerBtn.eq(current);
        move(next,'-100%', 0);
        rightBtn.addClass('on');
    })
    stopbtn.click(function(){
        clearInterval(setIntervalId);
        ppbtn=false;
    })
    playbtn.click(function(){
       timer();
       ppbtn=true;
    })
});
$(function(){
const tabList = $('.tabs');


function tabMenu(e){
    e.preventDefault();
    let $this=$(this)
    $this.next('ul').show().parent('li').addClass('active')
    .siblings('li').removeClass('active').find('ul').hide();
}

tabList.find('>ul>li>a').hover(tabMenu).focus(tabMenu) 
// 하위 find
});


    $("#testClick").click(function(){
                
        // 'testText'라는 id의 텍스트를 '안녕하세요 김철수 입니다.'라고 변경.
        $("#testText").text("2/2");
});
// $(function(){
//     const slideLists=$('.bannerSlideList li');
//     const prevbtn=$('.prevBtn');
//     const nextbtn=$('.nextBtn');
//     const stopbtn=$('.stopBtn');
//     const playbtn=$('.banStart');
//     let current=0;
//     let setIntervalId=undefined;

//     timer();
//     function timer(){
//         setIntervalId=setInterval(function(){
//             let prev=slideLists.eq(current);
//             move(prev, 0, '-300px');
//             current++;

//             if(current==24){current=0}
//             let next=slideLists.eq(current);
//             move(next,'300px', 0);
//         },3000);
//     }
//     function move(tg, start, end){
//         tg.css('left', start).stop().animate({left:end});
//     }

//     $('..bannerSlideList li, .prevBtn, .nextBtn').hover(function(){
//         clearInterval(setIntervalId)
//     },function(){
//         timer();
//     });
//     nextbtn.click(function(){
//         let prev=slideLists.eq(current);
//             move(prev, 0, '300px');
//             current++;
//             if(current==3){current=0}
//             let next=slideLists.eq(current);
//             move(next,'300px', 0);
//     })
//     prevbtn.click(function(){
//         let prev=slideLists.eq(current);
//         move(prev, 0, '300px');
//         current--;
//         if(current==-24){current=0}
//         let next=slideLists.eq(current);
//         move(next,'300px', 0);
//     })
//     stopbtn.click(function(){
//         clearInterval(setIntervalId);
//         ppbtn=false;
//     })
//     playbtn.click(function(){
//        timer();
//        ppbtn=true;
//     })
// });

var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
mapCenter = new kakao.maps.LatLng(37.2979705, 127.0232861), // 지도의 중심좌표
mapOption = {
    center: mapCenter, // 지도의 중심좌표
    level: 3 // 지도의 확대 레벨
};

var map = new kakao.maps.Map(mapContainer, mapOption);
    
    var content = '<div class="overlay_info">';
    content += '    <a href="https://place.map.kakao.com/12958946"target="_blank"><strong>경기도교육정보기록원</strong></a>';
    content += '    <div class="desc">';
    content += '       <img src="./img/kakaomap2.jpg" alt="">';
    content += '        <span class="address">경기도 수원시 장안구 조원로 18</span>';
    content += '    </div>';
    content += '</div>';
    
    // 커스텀 오버레이가 표시될 위치입니다 
    var position = new kakao.maps.LatLng(37.2979705, 127.0232861);
    
    // 커스텀 오버레이를 생성합니다
    var mapCustomOverlay = new kakao.maps.CustomOverlay({
        position: position,
        content: content,
        xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에        위치합니다. 기본값은 0.5 입니다
        yAnchor: 1.1 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에         위치합니다. 기본값은 0.5 입니다
    });

    // 커스텀 오버레이를 지도에 표시합니다
    mapCustomOverlay.setMap(map);

    var rvContainer = document.getElementById('roadview'); //로드뷰를 표시할 div
    var rv = new kakao.maps.Roadview(rvContainer); //로드뷰 객체
    var rvClient = new kakao.maps.RoadviewClient(); //좌표로부터 로드뷰 파노ID를        가져올 로드뷰 helper객체

    //지도의 중심좌표와 가까운 로드뷰의 panoId를 추출하여 로드뷰를 띄운다.
    rvClient.getNearestPanoId(mapCenter, 50, function(panoId) {
        rv.setPanoId(panoId, mapCenter); //panoId와 중심좌표를 통해 로드뷰 실행
    });

    kakao.maps.event.addListener(rv, 'init', function() {
    
        // 커스텀 오버레이를 생성합니다
        var rvCustomOverlay = new kakao.maps.CustomOverlay({
            position: position,
            content: content,
            xAnchor: 0.5, // 커스텀 오버레이의 x축 위치입니다. 1에 가까울수록 왼쪽에        위치합니다. 기본값은 0.5 입니다
            yAnchor: 0.5 // 커스텀 오버레이의 y축 위치입니다. 1에 가까울수록 위쪽에         위치합니다. 기본값은 0.5 입니다
        });
    
        //rvCustomOverlay.setAltitude(2); //커스텀 오버레이의 고도값을 설정합니다.      (로드뷰 화면 중앙이 0입니다)
        rvCustomOverlay.setMap(rv);
    
        var projection = rv.getProjection(); // viewpoint(화면좌표)값을 추출할 수       있는 projection 객체를 가져옵니다.

        // 커스텀오버레이의 position과 altitude값을 통해 viewpoint값(화면좌표)를        추출합니다.
        var viewpoint = projection.viewpointFromCoords(rvCustomOverlay.getPosition      (), rvCustomOverlay.getAltitude());
    
        rv.setViewpoint(viewpoint); //커스텀 오버레이를 로드뷰의 가운데에 오도록        로드뷰의 시점을 변화 시킵니다.
    });

const $prevBt=$('.prevBtn');
const $nextBt=$('.nextBtn');
const $moving=$('.boxView .bannerSlideList');
const $startBt=$('.startBtn');
const $stopBt=$('.stopBtn');
let autoa;


autoa = setInterval(autoslide,2000);
function autoslide(){
    $moving.stop().animate({left:155*-1},800,function(){
         $moving.children('li:first').insertAfter($($moving).children("li:last"));
         $moving.css({left:0});
        })
}

$nextBt.click(function(){
     $moving.stop().animate({left:155*-1},1000,function(){
         $(this).children('li:first').insertAfter($(this).children("li:last"));
         $(this).css({left:0});
     })
 })

$prevBt.click(function(){
    $moving.children("li:last").insertBefore( $moving.children("li:first"));
    //left를 this로 읽음
    //먼저 뒤에있는 친구들을 앞으로 와주게해야함
    $moving.css({left: 155*-1});
    $moving.stop().animate({left:0},1000);
    //없으면 끊겨서 넘어감
});
$stopBt.click(function(){
    clearInterval(autoa);
})
$startBt.click(function(){
    autoa = setInterval(autoslide,2000);
})
$('.prevBtn, .nextBtn, .boxView .bannerSlideList').hover(function(){
    clearInterval(autoa);
},
function(){
    autoa = setInterval(autoslide,2000);
});

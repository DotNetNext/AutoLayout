layoutApp.controller('headController',
 function ($scope) {
     $scope.title = "美女画画计区";
 });

layoutApp.controller('bodyController',
function ($scope) {
    $scope.forum = [
        { title: "画画交流", img: "forumicon_20.jpg" },
        { title: "临摹素材", img: "forumicon_20.jpg" },
        { title: "临摹素材", img: "forumicon_20.jpg" },
        { title: "临摹素材", img: "forumicon_35.jpg" },
        { title: "临摹素材", img: "forumicon_38.jpg" },
        { title: "临摹素材", img: "forumicon_20.jpg" },
        { title: "临摹素材", img: "forumicon_20.jpg" },
        { title: "临摹素材", img: "forumicon_20.jpg" }];
})

jqApp.controller($, function () {

    $("article .item").on("touchstart", function () {
     
    })

});
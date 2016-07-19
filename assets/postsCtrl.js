angular.module('app')
.controller('PostsCtrl', function($scope, $http){

	$http.get('/api/posts')
		.success(function(posts){
			$scope.posts = posts
		})

	$scope.addPost = function() {
		if ($scope.postBody) {

			$http.post('/api/posts',{
				username : 'kmyu'
				,body : $scope.postBody
			}).success(function(post){
				//$scope.posts.unshift(post)
				$scope.postBody = null
			})
		}
	}

	$scope.$on('ws:new_post',function(_, post){
		$scope.$apply(function(){
			$scope.posts.unshift(post)
		})
	})
});
import angular from 'angular'

const appRoot = document.getElementById('app')
const appModule = angular.module('starter-angular', [])

appModule.component('notificationsContainer', { controller: angular.noop, template: `<div>Hello World !</div>` })

/* @ngInject */
appModule.config($locationProvider => {
  $locationProvider.hashPrefix('')
  $locationProvider.html5Mode({ enabled: true, requireBase: false })
})

angular.element(appRoot).ready(_ => {
  angular.bootstrap(appRoot, [appModule.name], { strictDi: true })
})

console.log('this works :)', angular.version)

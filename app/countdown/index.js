import angular from 'angular'
import { CountdownComponent } from './countdown.component'

export default angular.module('Countdown', [])
.component('dtaCountdown', CountdownComponent)
.name
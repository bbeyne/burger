import template from './gravatar.component.html'
import md5 from 'md5'
import './gravatar.component.css'

class controller{
	controller() {
		this.displayGravatar =true
		this.burgername=''
	}
	$onInit (){
		this.md5=md5(this.email)
	}
	change () {
		this.displayGravatar=!this.displayGravatar;
	}
	clic(form){
		if (form.$invalid) return
		this.onTalk({
			$event: this.blabla
		})
	}


}

export let GravatarComponent ={
	template,
    controller,
    bindings: {
        email: '<',
        onTalk: '&'
    }
}

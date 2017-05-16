class controller {
    constructor ($interval) {
        this.$interval = $interval
        this.remain = 0
    }

    $onChanges (changes) {
        if (changes.time && changes.time.currentValue) {
            if (this.timer) this.$interval.cancel(this.timer)
            this.onStart({ $event: this.remain })
            this.remain = this.time.value
            this.timer = this.$interval(() => {
                this.remain--
                if (this.remain === 0) {
                    this.$interval.cancel(this.timer)
                    this.onEnd()
                }
            }, 1000)
        }
    }
    $onDestroy () {
        if (this.timer) this.$interval.cancel(this.timer)
    }
}

const template = `
<span class="badge">{{ $ctrl.remain }}</span>
`

export let CountdownComponent = {
    controller,
    template,
    bindings: {
        time: '<',
        onEnd: '&',
        onStart: '&'
    }
}
import './cutted-width.scss';

export default {
    template: `
		<div id="cutted-width" @click="moveEl()">
			<img v-bind:style="{ marginLeft: margin +'px'}" :src="image.src">
		</div>
	`,
    props: ['image'],
    data() {
        return {
            margin: 0,
            back: false
        };
    },
    methods: {
        moveRight() {
            this.margin -= 400;
            if (this.margin <= -2000) {
                this.back = true;
            }

        },
        moveLeft() {
            this.margin += 400;
            if (this.margin >= 0) {
                this.back = false;
            }
        },
        move() {
            if (this.back) {
                this.moveLeft();
                return;
            }
            this.moveRight();

        }
    },


    ready() {
        setInterval(() => {
            this.move();
        }, 1000);
    }

};

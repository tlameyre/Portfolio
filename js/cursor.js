  export default class Cursor {
    constructor() {
      this.initCursor();
      this.initHovers();
    }

    initCursor() {
      const { Back } = window;
      this.outerCursor = document.querySelector(".circle-cursor--outer");
      this.innerCursor = document.querySelector(".circle-cursor--inner");
      this.outerCursorBox = this.outerCursor.getBoundingClientRect();
      this.outerCursorSpeed = 0;
      this.easing = Back.easeOut.config(1.7);
      this.clientX = -100;
      this.clientY = -100;
      this.showCursor = false;

      const unveilCursor = () => {
        TweenMax.set(this.innerCursor, {
          x: this.clientX,
          y: this.clientY
        });
        TweenMax.set(this.outerCursor, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });
        setTimeout(() => {
          this.outerCursorSpeed = 0.2;
        }, 100);
        this.showCursor = true;
      };
      document.addEventListener("mousemove", unveilCursor);

      document.addEventListener("mousemove", e => {
        this.clientX = e.clientX;
        this.clientY = e.clientY;
      });

      const render = () => {
        TweenMax.set(this.innerCursor, {
          x: this.clientX,
          y: this.clientY
        });
        TweenMax.to(this.outerCursor, this.outerCursorSpeed, {
          x: this.clientX - this.outerCursorBox.width / 2,
          y: this.clientY - this.outerCursorBox.height / 2
        });

        if (this.showCursor) {
          document.removeEventListener("mousemove", unveilCursor);
        }
        requestAnimationFrame(render);
      };
      requestAnimationFrame(render);
    }

    initHovers() {
      const handleMouseEnterNavLink = e => {
        const target = e.currentTarget;
        const box = target.getBoundingClientRect();
        this.outerCursorOriginals = {
          width: this.outerCursorBox.width,
          height: this.outerCursorBox.height
        };
        TweenMax.to(this.innerCursor, 0.5, {
          opacity: 0
        });
        TweenMax.to(this.outerCursor, 0.5, {
          x: box.left - 1,
          y: box.top - 1,
          scale: 1.6
        });
      };

      const handleMouseEnterCursusLine = e => {
        this.outerCursorOriginals = {
          width: this.outerCursorBox.width,
          height: this.outerCursorBox.height
        };
        TweenMax.to(this.innerCursor, 0.5, {
          opacity: 0
        });
        TweenMax.to(this.outerCursor, 0.5, {
          opacity: 0
        });
      };

      const handleMouseEnterCardContainer = e => {
        this.innerCursor.children[1].style.fontSize = "2px"
        this.innerCursor.children[1].innerText = "DRAG"
        this.outerCursorOriginals = {
          width: this.outerCursorBox.width,
          height: this.outerCursorBox.height
        };
        TweenMax.to(this.innerCursor, 0.5, {
          width: '70px',
          height: '70px',
          left: '-35px',
          top: '-35px'
        });
        TweenMax.to(this.innerCursor.children[1], 0.5, {
          fontSize: "14px"
        });
        TweenMax.to(this.outerCursor, 0.5, {
          opacity: 0
        });
        [...document.querySelectorAll(".arrow")].forEach(arrow => {
          TweenMax.to(arrow, 0.5, {
            opacity: 1
          });
        })
      };

      const handleMouseDownCardContainer = e => {
        this.outerCursorOriginals = {
          width: this.outerCursorBox.width,
          height: this.outerCursorBox.height
        };
        TweenMax.to(this.innerCursor, 0.2, {
          width: '80px',
          height: '80px',
          left: '-40px',
          top: '-40px'
        });
      };

      const handleMouseUpCardContainer = e => {
        this.outerCursorOriginals = {
          width: this.outerCursorBox.width,
          height: this.outerCursorBox.height
        };
        TweenMax.to(this.innerCursor, 0.2, {
          width: '70px',
          height: '70px',
          left: '-35px',
          top: '-35px'
        });
      };

      const handleMouseLeave = () => {
        TweenMax.to(this.innerCursor, 0.5, {
          opacity: 1
        });
        TweenMax.to(this.outerCursor, 0.5, {
          width: this.outerCursorOriginals.width,
          height: this.outerCursorOriginals.height,
          opacity: 1,
          scale: 1
        });
      };

      const handleMouseLeaveCardContainer = () => {
        this.innerCursor.children[1].innerText = ""
        TweenMax.to(this.innerCursor, 0.5, {
          opacity: 1,
          height: '10px',
          width: '10px',
          top: '-5px',
          left: '-5px',
        });
        TweenMax.to(this.outerCursor, 0.5, {
          width: this.outerCursorOriginals.width,
          height: this.outerCursorOriginals.height,
          opacity: 1,
        });
        [...document.querySelectorAll(".arrow")].forEach(arrow => {
          TweenMax.to(arrow, 0.5, {
            opacity: 0
          });
        })
      };

      const linkItems = document.querySelectorAll("nav ul li a, .project-description a");
      linkItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnterNavLink);
        item.addEventListener("mouseleave", handleMouseLeave);
      });

      const schoolListItems = [...document.querySelectorAll(".school-list, .link")]
      schoolListItems.push(document.querySelector('.banner-text'));
      schoolListItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnterCursusLine);
        item.addEventListener("mouseleave", handleMouseLeave);
      });

      const projectListItems = document.querySelectorAll(".cards-container");
      projectListItems.forEach(item => {
        item.addEventListener("mouseenter", handleMouseEnterCardContainer);
        item.addEventListener("mouseleave", handleMouseLeaveCardContainer);

        item.addEventListener("mousedown", handleMouseDownCardContainer);
        item.addEventListener("mouseup", handleMouseUpCardContainer);

      });
    }
  }
if (window.screen.width > 1024) {
  console.log("Ku")
  new Cursor();
} else {
  console.log("yo")
}

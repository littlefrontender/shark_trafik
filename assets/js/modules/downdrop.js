export default function downdrop() {

    function hideBlockFunc(toggler, hide, block, heit) {
        const togglePromo = document.querySelector(toggler),
              hideBlockPromo = document.querySelector(hide),
              blockPromo = document.querySelector(block),
              computedBlockPromo = parseInt(getComputedStyle(blockPromo).height);

        function animateClose(count, min, block, hideBlock) {
            const int = setInterval(() => {
                count -= 130;
                block.style.height = count +'px';
                if (count <= min) {
                    clearInterval(int);
                    block.style.height = min +'px';
                    hideBlock.style.display = 'none';
                }
                }, 20)
            }
        
        function animateOpen(count, min, block, openBlock) {
            const int = setInterval(() => {
                min += 130;
                block.style.height = min +'px';
                if (min >= count) {
                    clearInterval(int);
                    block.style.height = 'auto';
                    openBlock.style.display = 'block';
                }
                }, 20)
            }

        function toggle(switcher) {
            switcher.classList.toggle('closed');
            if (switcher.classList.contains('closed')) {
                animateClose(computedBlockPromo, heit, blockPromo, hideBlockPromo);
            } else {
                animateOpen(computedBlockPromo, heit, blockPromo, hideBlockPromo);
            }
        }

        togglePromo.addEventListener('click', (e) => {
            e.preventDefault();
            toggle(togglePromo);
        })
    }
    hideBlockFunc('.promotion__divider--round a', '.promotion__hide', '.promotion__block', 330);
    hideBlockFunc('.development__divider--round a', '.development__hide', '.development__block', 330);
    hideBlockFunc('.optimization__divider--round a', '.optimization__hide', '.optimization__block', 330);

}
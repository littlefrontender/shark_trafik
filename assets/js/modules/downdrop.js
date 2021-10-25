export default function downdrop() {
    const togglePromo = document.querySelector('.promotion__divider--round a'),
          hideBlockPromo = document.querySelector('.promotion__hide'),
          blockPromo = document.querySelector('.promotion__block'),
          computedBlockPromo = parseInt(getComputedStyle(blockPromo).height);

    function animateClose(count, min, block, hideBlock) {
        const int = setInterval(() => {
            count -= 130;
            block.style.height = count +'px';
            console.log(count, min);
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
            console.log(min, count);
            if (min >= count) {
                clearInterval(int);
                block.style.height = 'auto';
                openBlock.style.display = 'block';
            }
            }, 20)
        }

    togglePromo.addEventListener('click', (e) => {
        e.preventDefault();
        togglePromo.classList.toggle('closed');
        if (togglePromo.classList.contains('closed')) {
            animateClose(computedBlockPromo, 280, blockPromo, hideBlockPromo);
        } else {
            animateOpen(computedBlockPromo, 280, blockPromo, hideBlockPromo);
        }
    })
}
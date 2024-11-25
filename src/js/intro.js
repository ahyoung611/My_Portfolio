
export function intro() {
    document.querySelectorAll('.dot').forEach(function (d, i, ary) {

        const minSize = 12;  // 최소 크기 (첫 번째 요소)
        const maxSize = 8;  // 최대 크기 (마지막 요소)

        const width = minSize + (i / (ary.length - 1)) * (maxSize - minSize);
        const height = minSize + (i / (ary.length - 1)) * (maxSize - minSize);

        d.style.width = width + 'px'
        d.style.height = height + 'px'

        const opacity = 1 - (i / (ary.length - 1)) * 0.9;
        d.style.opacity = opacity;
    })
}


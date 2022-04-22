/**
 * @version v0.0.31
 * @func goToTop
 * @return {void}
 * @desc 📝 平滑滚动到顶部
 */
export const goToTop = (): void => {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
        window.requestAnimationFrame(goToTop);
        window.scrollTo(0, c - c / 8);
    }
}

class Utils {
    /**
     * 滚动到指定dom节点
     */
    static scrollIntoElement (id: string): void {
        const ELE = document.querySelector(`#${id}`);
        if (ELE) {
            ELE.scrollIntoView({
                behavior: "smooth"
            });
        }
    }
}
export default Utils;
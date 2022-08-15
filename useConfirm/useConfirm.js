export const useConfirm = (message = "", onConfirm, onCancle) => {
    if (!onConfirm || typeof onConfirm !== "function") {
    return;
    }
    // onCancle은 의무적인 것 x
    if (onCancle && typeof onConfirm !== "function"){
        return;
    }
    const confirmAction = () => {
    if (window.confirm(message)) {
        onConfirm();
    } else {
        onCancle();
    }
    };
    return confirmAction;
};


// Window.confirm() : 확인과 취소 두 버튼을 가지며 메시지를 지정할 수 있는 모달 대화 상자를 띄움.
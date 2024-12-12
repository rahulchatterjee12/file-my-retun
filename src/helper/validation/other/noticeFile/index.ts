interface NoticeData {
    [key: string]: any;
}

export const verifyNoticeFile = (noticeData: NoticeData) => {

    if (!noticeData.file) {
        return { validated: false, errorMessage: "Document is Required." };
    }

    return { validated: true, errorMessage: '' };
}

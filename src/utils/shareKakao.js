const shareKakao = (url, name, image) => {
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init('d4e0d6aa8be82a57ce34a4b1e4bae59b');
    }
    kakao.Link.sendDefault({
      objectType: 'feed',
      content: {
        title: `Rolling | ${name.slice(0, -4)}`,
        description: `${name.slice(0, -4)}님에게 편지를 보내세요`,
        imageUrl: image,
        link: {
          webUrl: url,
        },
      },
      buttons: [
        {
          title: name,
          link: {
            webUrl: url,
          },
        },
      ],
    });
  }
};

export default shareKakao;

function firebaseUpdate() {
  const members = {
    member1: '홍길동',
    member2: '심춘향',
    member3: '김수미',
    member4: '최세민'
  }
  firebase.database().ref('members').update(members)
  console.warn('수정 완료')
}

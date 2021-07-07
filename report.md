ứng viên mô tả về những gì mình đã làm được và chưa làm được, đề xuất phương án xử lý đề bài tốt hơn nếu có.

trả lời:
ý tưởng:
	b1: tạo ra 2 store để quản lý state gồm danh sách các post và danh sách các comment đó là postReducer và commentReducer
			tạo ra 2 action actFetchPosts và actFetchComment(postId)
	b2: tạo ra 2 componet Posts và Comments
	+ Component Posts lấy các post về và show ra bằng các thẻ card
	trong mỗi button see comment sẽ truyền vào PostId để show ra Modal với các comment của post đó

	+ Component Comments là các Modal sẽ show ra danh sách các comment trong post đó.

	- các phần chưa làm được:
		+ show ra các comments của post.
		+ phân trang
		+ style lại giao diện

	


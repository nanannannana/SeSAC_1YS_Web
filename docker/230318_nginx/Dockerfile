#부모 이미지 지정
FROM nginx
# 작업 디렉토리 생성(및 work dir app폴더로 고정)
WORKDIR /app
# build 폴더 생성
RUN mkdir ./build
# localhost build 폴더 내용 docker build폴더에 복사
ADD ./build ./build

#nginx의 default.conf 삭제
RUN rm /etc/nginx/conf.d/default.conf
# host pc의 nginx.conf를 아래 경로에 복사
COPY ./nginx.conf /etc/nginx/conf.d

# 포트 매핑
EXPOSE 80
# 실행 명령
CMD ["nginx", "-g", "daemon off;"]
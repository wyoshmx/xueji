# 基于 Oat++ 的服务端开发

## 开发环境

VS2019

## 下载源码

## 安装 CMake

## Windows 编译

1. 编译oatpp 、oatpp-swagger

   cmake -DCMAKE_BUILD_TYPE=Release -DOATPP_BUILD_TESTS=OFF ..

   cmake --build . --target INSTALL

2. 编译oatpp-sqlite

   cmake -DCMAKE_BUILD_TYPE=$BUILD_TYPE -DOATPP_BUILD_TESTS=OFF -DOATPP_SQLITE_AMALGAMATION=ON ..

   cmake --build . --target INSTALL


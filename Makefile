
####################################
# 开发环境:准备
####################################

# 安装依赖包:
install:
	npm install cnpm -g
	cnpm i

######################################################
# 开发环境运行:
# serve with hot reload at localhost:8080
#
# 调试启动:
run:
	cnpm run dev

######################################################
#
# 生产环境运行:
#   - 此为编译结果, 需结合 HTTP 服务器才可访问
#
# build for production with minification
build:
	cnpm run build

unit.tests:
	cnpm run test

e2e.tests:
	cnpm run e2e

all.tests:
	cnpm test


#
# 文档:
#   - https://semantic-ui.com/collections/grid.html#grids
#   - LESS: http://www.bootcss.com/p/lesscss/
#

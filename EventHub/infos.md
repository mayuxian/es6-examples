//主要参考 ActiveMQ、RabbitMQ(相对稳定)、RocketMQ（阿里）
//https://blog.csdn.net/wqc19920906/article/details/82193316
//主要内容：
<!-- 2.1 Broker

消息服务器，作为server提供消息核心服务

      2.2 Producer

消息生产者，业务的发起方，负责生产消息传输给broker，

      2.3 Consumer

消息消费者，业务的处理方，负责从broker获取消息并进行业务逻辑处理

      2.4 Topic

主题，发布订阅模式下的消息统一汇集地，不同生产者向topic发送消息，由MQ服务器分发到不同的订阅者，实现消息的       广播

      2.5 Queue

队列，PTP模式下，特定生产者向特定queue发送消息，消费者订阅特定的queue完成指定消息的接收

      2.6 Message

消息体，根据不同通信协议定义的固定格式进行编码的数据包，来封装业务数据，实现消息的传输 -->


### 三种模式：
- P2P  点对点
- Topic 主题模式
- Pub/Sub发布订阅，使用topic作为通信载体


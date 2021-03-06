# 学记助理 XuejiAI

学记助理：基于统一语义结合智能助理的知识管理工具，与专属智能助理一起构建知识地图，持续积累你的知识财富！

打造新的**知识载体与交互方式**，在一张智能的纸上，实现知识网络、团队协作、学习与创新的一体化，通过开放社区、人机协作的方式，化繁为简降低信息熵，促进知识获取、高效学习、沟通协作、融合创新！探索认知智能，从信息服务到知识服务！成为你的第二大脑！

## 背景

> 信息爆炸、知识碎片化、物质丰富精神匮乏、人工智能崛起、大数据、工具使用成本高，为自己开发一个智能工具。

**知识定义**：可被人类重复利用创造价值的信息。  

现状：当前知识主要载体（书本、音频、视频、大脑），碎片化、形式单一、易丢失，不利于获取、学习、交互、分享及持续积累。  
方案：通过类似一张智能的纸的应用，记录到智能系统中，结合智能助理通过简便的操作智能交互，辅助增强学习理解，持续积累。  

- 知识可视化：不仅仅是图文、视频，多视图多层次与动态知识交互（纯文本、表格、图表、3D、地图）
- 对话式智能交互：不是在无数菜单页面中查找一个按钮，在一个工具中整合多种功能，降低软件使用成本，与专属助理一同成长
- 链接知识与人：不是碎片化的信息，把知识链接成网络、加强人与知识的关联
- 专注智能知识管理：首先是关于知识的知识，**以人为本**增强人的能力的工具及知识

让知识可以多层次可视化交互，让好的理念、最佳实践，模板化智能化可复用，支持实时协作整理创造分享知识。帮助你不断深入理解和高效管理你的信息、知识及洞见，以创造更多价值。覆盖知识的收集、整理、展示、理解、分享、应用、创作、协作全流程

## 设计理念

- 极致体验、专属定制、融通、可持续、易用、高性能、可定制
- **至简**，像一张智能的纸；**便捷**快速找到所需  
- 让你**专注**做事；**链接**人与知识；智能推理推荐（**能动性**）   
- 人性定制、实时协作、开放共享、**价值**驱动、去中心化

## 产品特性

特性：基于统一语义、一切皆文档、融通互联、多层次可视化、对话式智能交互、专属定制

- **基于统一语义**：化繁为简、融合不同领域学科、人与机器的知识。语义->概念->信息->知识->智能
- **一切皆文档**：基于语义组件、智能模板，组合成你需要的应用
- **多层次可视化**：实时协作、多视图多层次与知识交互（纯文本、表格、导图、图表、日历、项目、VR）
- **对话式智能交互**：目的上下文、适时、实时、必要，对话式、响应式。快速找到所需，降低软件使用成本，智能推荐提醒、辅助推理决策创新。
- **链接知识与人**：把知识链接成网络、加强人与知识的关联、实时协作
- **专属定制**: 可自由定制、组件、插件、命令、自然交互、学习增强
- **价值驱动**：目标管理、任务化、游戏化、贡献积分、代币激励、共享经济

## 功能架构

- 智能文档：基于上下文的对话生成式DUI、画板、多视图、语义组件插件（**元组件**）、默认主题、智能模板、DSL（**元语言**）
- 知识管理：概念图、知识地图、学习笔记、思维导图、半自动抽取集成（**元知识**）
- 专属助理：3D 虚拟形象(小五)、人机协作、每日一问、自然语言交互、推荐提醒、智能体（**元智能**）
- 自我管理：原则、目标、任务计划、时间精力管理、GTD
- 虚拟空间：个人空间、知识产权、贡献积分、学习社区、知识共享（**元宇宙**）

**场景优先级**

- 1 级：通用工具，应用框架，信息整理、学习笔记、知识地图、思维导图、DSL，可用性
- 2 级：个人助理，游戏化任务式智能交互、GTD，易用性
- 3 级：知识管理（概念图、个人企业、记忆宫殿、知识图谱）、敏捷项目、流程自动化
- 4 级：半自动知识萃取集成、深度学习、数据分析可视化、本体建模

## 技术

- 核心技术：语义 Web、数据可视化、语义计算、知识图谱、自然语言理解、机器学习、3D/AR 等技术
- 多智能体微服务架构：UI层（语义组件）, 接口层（通信）, 业务层（服务）, 引擎层（计算）, 数据层（存储）, 分布式计算存储
- 前端 reactjs、threejs、slatejs；接口 openApi、graphql、websocket。
- DSL: 知识管理、人机交互专用语言命令脚本: 参考 markdown(静态) + js (动态)。声明式+命令式
- 后端服务+语义计算+智能引擎 Java/Typescript、c++
- 存储：图数据库 dgraph + postgresql + rocksdb; 参考 Dgraph、Nebula、Redisgraph

## 运营

开放学习社区：项目协作、众包共享
资源建设：组件插件库、开放概念图、知识技能图谱
专属助理：专属定制、技能包、皮肤场景
知识服务：精准内容、可复用模板、变现、转移

## TOOD

- 团队组建：产品、开发、算法、运营、用户 
- 功能设计：对话式交互、知识地图
- 原型开发：业务建模、技术选型、持续迭代，首先用于项目协作文档+内置文档管理。
- 资源建设：开放知识图谱（概念图+领域知识）、组件库、模板库、能力包  
- 社区运营：协同学习社区、虚拟空间，学习改变命运，创新改变世界！  

更多：[Roadmap](./docs/Roadmap.md)

## 价值主张

大道至简、以人为本、化繁为简、融合创新  
解决问题的方法论是通用的，随时随地获取利用的知识  
寻求帮助及协作、可复用的最佳实践、智能的工具辅助  
整体大于部分之和、知识能力时空一体  
精准内容极致体验、整体学习持续积累  

> 专注智能知识管理，提供专业知识服务！让每个人可以自由学习与创新！
> 打造每个人的智能助理、第二大脑、虚拟空间!

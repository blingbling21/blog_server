<template>
  <div id="article">
    <div class="info">
      <h2>请添加文章</h2>
      <input type="file" id="file" @change="fileChange" />
      <div class="up">
        <div class="choose">已选文件:{{ fileName }}</div>
        <button @click="upToDB">添加到数据库</button>
      </div>
    </div>
    <div class="preview">预览区</div>
    <div class="end">-------------结束-------------</div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-light.css";

@Component({})
export default class Article extends Vue {
  private article = "";
  private fileName = "";

  // 读取文件赋值给 this.article 并解析为 md 进行预览，
  fileChange(e: Event) {
    const reader = new FileReader();
    const target = e.target as HTMLInputElement;
    const f = (target.files as FileList)[0];
    if (f !== undefined) {
      if (f.name.slice(f.name.lastIndexOf(".") + 1) !== "md") {
        alert("请选择markdown文档！");
      } else {
        this.fileName = f.name;
        let md = "";
        reader.onload = (event) => {
          const result = event.target?.result as string;
          const p = document.querySelector(".preview") as HTMLElement;
          md = marked(result, {
            highlight: function (code) {
              return hljs.highlightAuto(code).value;
            },
          });
          this.article = md;
          p.innerHTML = md.replace(/<pre>/g, "<pre class='hljs'>");
        };
        reader.readAsText(f);
        const preview = document.querySelector(".preview") as HTMLElement;
        preview.innerText = "正在解析。。。";
      }
    }
  }
  // 将数据给数据库
  upToDB() {
    if (this.fileName !== "") {
      console.log(this.fileName);
    } else {
      alert("请先选择要添加到数据库的文件！");
    }
  }
}
</script>

<style lang='less'>
#article {
  .info {
    text-align: center;
    margin-top: 50px;
    margin-left: 50%;
    transform: translateX(-50%);
    #file {
      box-shadow: 1px 1px 3px #cccccc;
      padding: 10px 14px;
      border-radius: 5px;
      transition: all 0.3s;
      outline: none;
      &:hover {
        cursor: pointer;
        box-shadow: 1px 1px 10px #cccccc;
      }
    }
    .up {
      display: flex;
      justify-content: center;
      margin-top: 20px;
      .choose {
        padding: 0 10px;
      }
    }
  }
  .preview {
    border: 1px solid #cccccc;
    margin: 50px auto;
    padding: 20px 40px;
    width: 600px;
    box-shadow: 1px 1px 3px #cccccc;
    border-radius: 10px;
  }
  .end {
    text-align: center;
    padding-bottom: 50px;
    margin: auto;
    color: #cccccc;
  }
}
</style>
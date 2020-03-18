import { Component, Output, Input, EventEmitter, HostListener, OnDestroy, AfterViewInit } from '@angular/core';

import 'tinymce';
import { MainService } from 'src/app/services/main.service';


@Component({
  selector: 'app-tiny-editor',
  template: `
  <div class="form-group">
  <editor [init]="tinyMceSettings" style="height: 55vh" id="body" name="body" class="form-control"></editor>
   
  </div>`
})
export class TinyEditorComponent   {
  @Output() onEditorContentChange = new EventEmitter();
  @Input() setBody: String;
  serverAddress: String;
  

  constructor(
    private mainService: MainService,
  ) {
   
    this.serverAddress = this.mainService.getServerAddress();
    // this.onEditorContentChange.emit('alert');
    @HostListener('change') ngOnChanges() {
      console.log('test');
  }

  }

  editor;
  // @HostListener('window:unload', [ '$event' ])
  // beforeUnloadHandler(event) {
  //   console.log('in side host lisner');
  // this.editor = 'rrrr';
  // }


  public tinyMceSettings = {
    base_url: 'tinymce', // Root for resources
    suffix: '.min',       // Suffix to use when loading resources
    skin_url: 'assets/tinymce/tinymce/skins/ui/oxide',
    skin: "oxide",
    content_css: ['assets/tinymce/tinymce/skins/ui/oxide/content.min.css',"assets/tinymce/css/custom-tinymce.css"],
    inline: false,
    statusbar: false,
    browser_spellcheck: true,
    height: 500,
    extended_valid_elements : "b/strong,i/em",
    formats: {
        bold: {inline: 'b'},  
        italic: {inline: 'i'}
    },
    plugins: 'advlist lists table searchreplace insertdatetime autolink visualblocks visualchars fullscreen image link hr pagebreak nonbreaking anchor toc wordcount imagetools textpattern',
    toolbar: "undo redo | styleselect | bold italic underline subscript superscript removeformat | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | fontsizeselect",
    setup: (editor) => {
      console.log(editor)
      let that = this;
      editor.on('keydown', function (e) {
        if (e.keyCode == 32 && e.ctrlKey) {
            
        }
      });
  }
  };


}

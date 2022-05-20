/**
 * Register the block
*/

const { registerBlockType } = wp.blocks;
const { MediaUpload, MediaUploadCheck } = wp.blockEditor;
const { Button, Dashicon  } = wp.components;
const { __ } = wp.i18n;

registerBlockType('core/image-with-content',{
  title:'Image With Content',
  icon:'admin-plugins',
  category:'design',
  attributes:{
      blockImage_ID:{
        type: 'number'
      },
      blockImage_URL: {
                type: 'string',
                source: 'attribute',
                selector: 'img',
                attribute: 'src',
            },
      blockImage_alt: {
              type: 'string',
              source: 'attribute',
              selector: 'img',
              attribute: 'alt',
      },
      blockHeading: { type: 'string'},
      blockParagraph: { type: 'string'}, 
      blockUrl:{type:'string'},
  },
  
  edit: (props) => {
    const select_img = (img)=>{
      props.setAttributes({
        blockImage_ID : img.id,
        blockImage_URL : img.url,
        blockImage_alt : img.alt,  
      })
    };
    const remove_img = ()=>{
      props.setAttributes({
        blockImage_ID : null,
        blockImage_URL : null,
        blockImage_alt : null, 
      })
    };
    function updateBlockHeading(event){
      props.setAttributes({blockHeading: event.target.value});
    }
    function updateBlockParagraph(event){
      props.setAttributes({blockParagraph: event.target.value});
    }
    function updateBlockUrl(event){
      props.setAttributes({blockUrl: event.target.value});
    }
    return React.createElement("div", {
      id: "wrapper",
      
    }, /*#__PURE__*/React.createElement("div", null, props.attributes.blockImage_ID ? /*#__PURE__*/React.createElement("div", {
      className: "image-ctr"
    }, /*#__PURE__*/React.createElement("img", {
      src: props.attributes.blockImage_URL,
      alt: props.attributes.blockImage_alt
    }), props.isSelected ? /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
      className: "button button-danger button-large",
      onClick: remove_img
    }, __('Delete Image', 'core'))) : null) : /*#__PURE__*/React.createElement(MediaUploadCheck, null, /*#__PURE__*/React.createElement(MediaUpload, {
      allowedType: ['image'],
      value: props.attributes.blockImage_ID,
      onSelect: select_img,
      multiple: false,
      render: ({
        open
      }) => /*#__PURE__*/React.createElement(Button, {
        className: "button button-primary button-large",
        onClick: open
      }, __('Upload Image', 'core'))
    }))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Heading"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "heading",
      placeholder: "Heading",
      value: props.attributes.blockHeading,
      onChange: updateBlockHeading
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Paragraph"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("textarea", {
      type: "text",
      id: "paragraph",
      placeholder: "Paragraph",
      value: props.attributes.blockParagraph,
      onChange: updateBlockParagraph,
      "max-length": "20"
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "URL"), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("input", {
      type: "text",
      id: "url",
      placeholder: "http://www.yourURL.con",
      value: props.attributes.blockUrl,
      onChange: updateBlockUrl
    }))));;
  },
  save: (props) =>{
      
      return React.createElement("div", null, /*#__PURE__*/React.createElement("a", {
        href: props.attributes.blockUrl,
        target: "_blank",
        rel: "noopener"
      }, /*#__PURE__*/React.createElement("div", {
        class:"image"
      }
      , /*#__PURE__*/React.createElement("img", {
        src: props.attributes.blockImage_URL,
        alt: props.attributes.blockImage_alt,
      })), /*#__PURE__*/React.createElement("div", {
        class: "content"
      }, /*#__PURE__*/React.createElement("h3", null, props.attributes.blockHeading), /*#__PURE__*/React.createElement("p", null, props.attributes.blockParagraph))));
  }
});
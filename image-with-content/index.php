<?php
/**
 * Plugin Name: Image With Content
 * Description: This plugin is useful to display the list of images with heading & description and add link to it.
 * Version:     0.1.0
 * Author:      Amit Mahato
 * Plugin URI:  https://isw.net.au/
 * Author URI:  https://isw.net.au/
 */


function image_with_content(){
    wp_enqueue_script(
        'image-with-content', 
        plugins_url('index.js',__FILE__), 
        array(
            'jquery',
            'wp-blocks',
            'wp-components',            
            'wp-data',
            'wp-editor',
            'wp-edit-post',
            'wp-element',
            'wp-i18n',
            'wp-plugins',         
            ),
        true,
        false
    );
    wp_enqueue_style(
        'style-theme',
        plugins_url('style.css',__FILE__)
    );
    wp_enqueue_style(
        'editor-theme',
        plugins_url('editor.css',__FILE__)
    );
}
add_action('enqueue_block_assets', 'image_with_content');

function add_media_script( $hook_suffix ) {

  wp_enqueue_media();

}
add_action( 'admin_enqueue_scripts', 'add_media_script' );

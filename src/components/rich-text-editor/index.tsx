import React from 'react'
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import MenuBar from './menu-bar'
import TextAlign from '@tiptap/extension-text-align';
import Highlight from '@tiptap/extension-highlight';
import Image from "@tiptap/extension-image";

interface RichTextEditorProps{
    content: string | undefined ;
    onChange: (content: string) => void;
}

export default function RichTextEditor({content, onChange}: RichTextEditorProps) {
    const editor = useEditor({
        extensions: [
            StarterKit.configure({
                bulletList:{
                    HTMLAttributes: {
                        class: 'list-disc ml-3',
                    },
                },
                orderedList:{
                    HTMLAttributes: {
                        class: 'list-decimal ml-3',
                    },
                },
            }),
            TextAlign.configure({
                types: ['heading', 'paragraph'],
            }),
            Highlight.configure({
                HTMLAttributes: {
                    class: 'hover:bg-red-500'
                }
            }),
            Image,
        ],
        content: content,
        editorProps: {
            attributes: {
                class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3"
            }
        },
        onUpdate: ({ editor }) => {
            onChange(editor.getHTML())
        }
      })
    
      return (
        <div>
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
      )
}

export type Database = {
  public: {
    Tables: {
      api_call_logs: {
        Row: {
          created_at: string | null
          event: string | null
          id: number
          payload: JSON
          response: JSON | null
        }
        Insert: {
          created_at?: string | null
          event?: string | null
          id?: number
          payload: JSON
          response?: JSON | null
        }
        Update: {
          created_at?: string | null
          event?: string | null
          id?: number
          payload?: JSON
          response?: JSON | null
        }
        Relationships: []
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: string
          messages: JSON | null
          note_id: string | null
          title: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          messages?: JSON | null
          note_id?: string | null
          title?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          messages?: JSON | null
          note_id?: string | null
          title?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_sessions_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chat_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      chats: {
        Row: {
          answer: string | null
          created_at: string
          error: JSON | null
          folder_id: string | null
          id: string
          is_ready: string
          note_id: string | null
          question: string | null
          references: JSON
          session_id: string
          tag: string | null
          type: Database["public"]["Enums"]["enumtypechat"] | null
          user_id: string
        }
        Insert: {
          answer?: string | null
          created_at?: string
          error?: JSON | null
          folder_id?: string | null
          id?: string
          is_ready?: string
          note_id?: string | null
          question?: string | null
          references?: JSON
          session_id: string
          tag?: string | null
          type?: Database["public"]["Enums"]["enumtypechat"] | null
          user_id: string
        }
        Update: {
          answer?: string | null
          created_at?: string
          error?: JSON | null
          folder_id?: string | null
          id?: string
          is_ready?: string
          note_id?: string | null
          question?: string | null
          references?: JSON
          session_id?: string
          tag?: string | null
          type?: Database["public"]["Enums"]["enumtypechat"] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "chats_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chats_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chats_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "chat_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chats_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      cron_logs: {
        Row: {
          batch_id: string
          created_at: string
          deleted_data: JSON
          error_metadata: JSON | null
          id: number
          metadata: JSON | null
        }
        Insert: {
          batch_id: string
          created_at?: string
          deleted_data: JSON
          error_metadata?: JSON | null
          id?: number
          metadata?: JSON | null
        }
        Update: {
          batch_id?: string
          created_at?: string
          deleted_data?: JSON
          error_metadata?: JSON | null
          id?: number
          metadata?: JSON | null
        }
        Relationships: []
      }
      deleted_accounts: {
        Row: {
          deleted_at: string
          deleted_from: Database["public"]["Enums"]["enumplatform"] | null
          email: string
          id: string
          joined_at: string
          joined_from: Database["public"]["Enums"]["enumplatform"] | null
          last_plan: string
          last_renewal_date: string | null
          name: string | null
          payment_platform:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
        }
        Insert: {
          deleted_at?: string
          deleted_from?: Database["public"]["Enums"]["enumplatform"] | null
          email: string
          id?: string
          joined_at: string
          joined_from?: Database["public"]["Enums"]["enumplatform"] | null
          last_plan: string
          last_renewal_date?: string | null
          name?: string | null
          payment_platform?:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
        }
        Update: {
          deleted_at?: string
          deleted_from?: Database["public"]["Enums"]["enumplatform"] | null
          email?: string
          id?: string
          joined_at?: string
          joined_from?: Database["public"]["Enums"]["enumplatform"] | null
          last_plan?: string
          last_renewal_date?: string | null
          name?: string | null
          payment_platform?:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
        }
        Relationships: []
      }
      error_logs: {
        Row: {
          created_at: string
          error: JSON | null
          id: number
          payload: JSON
          type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          error?: JSON | null
          id?: number
          payload: JSON
          type: string
          user_id: string
        }
        Update: {
          created_at?: string
          error?: JSON | null
          id?: number
          payload?: JSON
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "error_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      folders: {
        Row: {
          color: string | null
          created_at: string
          folder_name: string
          id: string
          user_id: string
        }
        Insert: {
          color?: string | null
          created_at?: string
          folder_name: string
          id?: string
          user_id: string
        }
        Update: {
          color?: string | null
          created_at?: string
          folder_name?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "folders_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      handbook: {
        Row: {
          content: JSON
          created_at: string
          id: string
          note_id: string
          title: string
          type: Database["public"]["Enums"]["enumhandbooktype"]
          user_id: string
        }
        Insert: {
          content: JSON
          created_at?: string
          id?: string
          note_id: string
          title?: string
          type: Database["public"]["Enums"]["enumhandbooktype"]
          user_id: string
        }
        Update: {
          content?: JSON
          created_at?: string
          id?: string
          note_id?: string
          title?: string
          type?: Database["public"]["Enums"]["enumhandbooktype"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "quizlet_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "quizlet_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      languages: {
        Row: {
          code: string
          created_at: string
          id: string
          name: string | null
          order: number | null
        }
        Insert: {
          code: string
          created_at?: string
          id?: string
          name?: string | null
          order?: number | null
        }
        Update: {
          code?: string
          created_at?: string
          id?: string
          name?: string | null
          order?: number | null
        }
        Relationships: []
      }
      manual_plan_changes: {
        Row: {
          changed_by: string
          created_at: string
          id: number
          new_data: JSON
          old_data: JSON
          reason: string
          user_id: string
        }
        Insert: {
          changed_by: string
          created_at?: string
          id?: number
          new_data: JSON
          old_data: JSON
          reason: string
          user_id: string
        }
        Update: {
          changed_by?: string
          created_at?: string
          id?: number
          new_data?: JSON
          old_data?: JSON
          reason?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "manual_plan_changes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      note_generatinos: {
        Row: {
          content: string | null
          created_at: string
          error: JSON | null
          id: string
          is_ready: string
          language: string | null
          note_id: string
          style_id: string | null
          title: string | null
          type: Database["public"]["Enums"]["enumnotecontent"]
          user_id: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          error?: JSON | null
          id?: string
          is_ready?: string
          language?: string | null
          note_id: string
          style_id?: string | null
          title?: string | null
          type: Database["public"]["Enums"]["enumnotecontent"]
          user_id: string
        }
        Update: {
          content?: string | null
          created_at?: string
          error?: JSON | null
          id?: string
          is_ready?: string
          language?: string | null
          note_id?: string
          style_id?: string | null
          title?: string | null
          type?: Database["public"]["Enums"]["enumnotecontent"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "note_generatinos_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "note_generatinos_style_id_fkey"
            columns: ["style_id"]
            isOneToOne: false
            referencedRelation: "styles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "note_generatinos_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notes: {
        Row: {
          attached_image_urls: string[] | null
          audio_url: string | null
          chat_active: boolean
          chunks_count: number | null
          completed_at: string | null
          conversation_id: string | null
          created_at: string
          default_questions: string[] | null
          detected_language: string | null
          device: string | null
          diarization: JSON | null
          error: JSON | null
          favourite: boolean
          file_name: string | null
          folder_id: string | null
          formatted_transcript: string | null
          id: string
          is_ready: string
          media_duration: number | null
          meeting_minutes: string | null
          mindmap: JSON | null
          note_type: Database["public"]["Enums"]["enumnotetype"] | null
          participant_id: string | null
          participant_type: string | null
          platform: Database["public"]["Enums"]["enumplatform"] | null
          public: boolean
          recommendations: JSON | null
          speaker_data: string | null
          summary: string | null
          tags: string[] | null
          title: string | null
          transcript: string | null
          transcription_created_at: string | null
          transcription_language: string | null
          usecase: Database["public"]["Enums"]["enumnotesusecase"] | null
          user_id: string
          youtube_url: string | null
        }
        Insert: {
          attached_image_urls?: string[] | null
          audio_url?: string | null
          chat_active?: boolean
          chunks_count?: number | null
          completed_at?: string | null
          conversation_id?: string | null
          created_at?: string
          default_questions?: string[] | null
          detected_language?: string | null
          device?: string | null
          diarization?: JSON | null
          error?: JSON | null
          favourite?: boolean
          file_name?: string | null
          folder_id?: string | null
          formatted_transcript?: string | null
          id?: string
          is_ready?: string
          media_duration?: number | null
          meeting_minutes?: string | null
          mindmap?: JSON | null
          note_type?: Database["public"]["Enums"]["enumnotetype"] | null
          participant_id?: string | null
          participant_type?: string | null
          platform?: Database["public"]["Enums"]["enumplatform"] | null
          public?: boolean
          recommendations?: JSON | null
          speaker_data?: string | null
          summary?: string | null
          tags?: string[] | null
          title?: string | null
          transcript?: string | null
          transcription_created_at?: string | null
          transcription_language?: string | null
          usecase?: Database["public"]["Enums"]["enumnotesusecase"] | null
          user_id: string
          youtube_url?: string | null
        }
        Update: {
          attached_image_urls?: string[] | null
          audio_url?: string | null
          chat_active?: boolean
          chunks_count?: number | null
          completed_at?: string | null
          conversation_id?: string | null
          created_at?: string
          default_questions?: string[] | null
          detected_language?: string | null
          device?: string | null
          diarization?: JSON | null
          error?: JSON | null
          favourite?: boolean
          file_name?: string | null
          folder_id?: string | null
          formatted_transcript?: string | null
          id?: string
          is_ready?: string
          media_duration?: number | null
          meeting_minutes?: string | null
          mindmap?: JSON | null
          note_type?: Database["public"]["Enums"]["enumnotetype"] | null
          participant_id?: string | null
          participant_type?: string | null
          platform?: Database["public"]["Enums"]["enumplatform"] | null
          public?: boolean
          recommendations?: JSON | null
          speaker_data?: string | null
          summary?: string | null
          tags?: string[] | null
          title?: string | null
          transcript?: string | null
          transcription_created_at?: string | null
          transcription_language?: string | null
          usecase?: Database["public"]["Enums"]["enumnotesusecase"] | null
          user_id?: string
          youtube_url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "notes_folder_id_fkey"
            columns: ["folder_id"]
            isOneToOne: false
            referencedRelation: "folders"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_transcription_language_fkey"
            columns: ["transcription_language"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "notes_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      notes_tags: {
        Row: {
          created_at: string
          id: string
          note_id: string
          tag_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          note_id: string
          tag_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          note_id?: string
          tag_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notes_tags_note_id_fkey"
            columns: ["note_id"]
            isOneToOne: false
            referencedRelation: "notes"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_tags_tag_id_fkey"
            columns: ["tag_id"]
            isOneToOne: false
            referencedRelation: "tags"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "notes_tags_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_usecases: {
        Row: {
          category: string | null
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_usecases_category_fkey"
            columns: ["category"]
            isOneToOne: false
            referencedRelation: "style_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      paid_users: {
        Row: {
          auth_provider: string | null
          created_at: string
          default_style: string | null
          email: string
          fcm_token: string | null
          full_name: string | null
          id: string
          incorrect_words: string[] | null
          input_language: string | null
          joining_period: string
          notes_count: number
          output_language: string | null
          payment_platform:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
          plan: string
          plan_changed_at: string
          plan_frequency: string | null
          renewal_date: string | null
          status: string
          tags: string[] | null
          time_used: number
          user_type: Database["public"]["Enums"]["enumusertype"] | null
          utm: string | null
        }
        Insert: {
          auth_provider?: string | null
          created_at: string
          default_style?: string | null
          email: string
          fcm_token?: string | null
          full_name?: string | null
          id: string
          incorrect_words?: string[] | null
          input_language?: string | null
          joining_period?: string
          notes_count: number
          output_language?: string | null
          payment_platform?:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
          plan: string
          plan_changed_at?: string
          plan_frequency?: string | null
          renewal_date?: string | null
          status?: string
          tags?: string[] | null
          time_used: number
          user_type?: Database["public"]["Enums"]["enumusertype"] | null
          utm?: string | null
        }
        Update: {
          auth_provider?: string | null
          created_at?: string
          default_style?: string | null
          email?: string
          fcm_token?: string | null
          full_name?: string | null
          id?: string
          incorrect_words?: string[] | null
          input_language?: string | null
          joining_period?: string
          notes_count?: number
          output_language?: string | null
          payment_platform?:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
          plan?: string
          plan_changed_at?: string
          plan_frequency?: string | null
          renewal_date?: string | null
          status?: string
          tags?: string[] | null
          time_used?: number
          user_type?: Database["public"]["Enums"]["enumusertype"] | null
          utm?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "paid_users_default_style_fkey"
            columns: ["default_style"]
            isOneToOne: false
            referencedRelation: "styles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "paid_users_input_language_fkey"
            columns: ["input_language"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "paid_users_output_language_fkey"
            columns: ["output_language"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "paid_users_plan_fkey"
            columns: ["plan"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["plan"]
          },
        ]
      }
      payment_intents: {
        Row: {
          created_at: string
          error: JSON | null
          event: JSON
          event_id: string
          event_name: string
          id: number
          platform: Database["public"]["Enums"]["enumpaymentplatform"]
          user: string
        }
        Insert: {
          created_at?: string
          error?: JSON | null
          event: JSON
          event_id: string
          event_name: string
          id?: number
          platform: Database["public"]["Enums"]["enumpaymentplatform"]
          user: string
        }
        Update: {
          created_at?: string
          error?: JSON | null
          event?: JSON
          event_id?: string
          event_name?: string
          id?: number
          platform?: Database["public"]["Enums"]["enumpaymentplatform"]
          user?: string
        }
        Relationships: []
      }
      plans: {
        Row: {
          annual_lemonsqueezy_id: number | null
          annual_offer_revenuecat_id: string | null
          annual_pricing_url: string | null
          annual_revenuecat_id: string | null
          attach_image: boolean | null
          audio: boolean | null
          chat: boolean
          created_at: string
          delete_audio_after: number
          discount: string | null
          features: string[] | null
          id: string
          image: boolean | null
          is_active: boolean
          monthly: number | null
          monthly_lemonsqueezy_id: number | null
          monthly_pricing_url: string | null
          monthly_revenuecat_id: string | null
          not_included: string[] | null
          notion: boolean
          offer_time: number | null
          offering_id: string | null
          plan: string
          recording_time: number
          text: boolean | null
          time: number
          trial_offer_period: number | null
          trial_period: number | null
          upload: boolean | null
          upload_size: number
          webhook: boolean
          weekly: number | null
          weekly_pricing_url: string | null
          weekly_revenuecat_id: string | null
          whatsapp: boolean
          yearly: number | null
          yearly_offer: number | null
          youtube: boolean | null
          youtube_limit: number
          zapier: boolean
        }
        Insert: {
          annual_lemonsqueezy_id?: number | null
          annual_offer_revenuecat_id?: string | null
          annual_pricing_url?: string | null
          annual_revenuecat_id?: string | null
          attach_image?: boolean | null
          audio?: boolean | null
          chat: boolean
          created_at?: string
          delete_audio_after?: number
          discount?: string | null
          features?: string[] | null
          id?: string
          image?: boolean | null
          is_active?: boolean
          monthly?: number | null
          monthly_lemonsqueezy_id?: number | null
          monthly_pricing_url?: string | null
          monthly_revenuecat_id?: string | null
          not_included?: string[] | null
          notion: boolean
          offer_time?: number | null
          offering_id?: string | null
          plan: string
          recording_time: number
          text?: boolean | null
          time: number
          trial_offer_period?: number | null
          trial_period?: number | null
          upload?: boolean | null
          upload_size: number
          webhook: boolean
          weekly?: number | null
          weekly_pricing_url?: string | null
          weekly_revenuecat_id?: string | null
          whatsapp: boolean
          yearly?: number | null
          yearly_offer?: number | null
          youtube?: boolean | null
          youtube_limit?: number
          zapier: boolean
        }
        Update: {
          annual_lemonsqueezy_id?: number | null
          annual_offer_revenuecat_id?: string | null
          annual_pricing_url?: string | null
          annual_revenuecat_id?: string | null
          attach_image?: boolean | null
          audio?: boolean | null
          chat?: boolean
          created_at?: string
          delete_audio_after?: number
          discount?: string | null
          features?: string[] | null
          id?: string
          image?: boolean | null
          is_active?: boolean
          monthly?: number | null
          monthly_lemonsqueezy_id?: number | null
          monthly_pricing_url?: string | null
          monthly_revenuecat_id?: string | null
          not_included?: string[] | null
          notion?: boolean
          offer_time?: number | null
          offering_id?: string | null
          plan?: string
          recording_time?: number
          text?: boolean | null
          time?: number
          trial_offer_period?: number | null
          trial_period?: number | null
          upload?: boolean | null
          upload_size?: number
          webhook?: boolean
          weekly?: number | null
          weekly_pricing_url?: string | null
          weekly_revenuecat_id?: string | null
          whatsapp?: boolean
          yearly?: number | null
          yearly_offer?: number | null
          youtube?: boolean | null
          youtube_limit?: number
          zapier?: boolean
        }
        Relationships: []
      }
      settings: {
        Row: {
          auto_download_audio: boolean
          created_at: string
          id: string
          notion: boolean
          notion_data: JSON | null
          onboarded_at: string | null
          platform: Database["public"]["Enums"]["enumplatform"] | null
          send_transcribe_email: boolean
          usecase: string[] | null
          user_email: string | null
          user_id: string
          webhook: boolean
          webhook_url: string | null
          whatsapp: boolean
          whatsapp_phone_number: string | null
          zapier: boolean
          zapier_hook: string | null
        }
        Insert: {
          auto_download_audio?: boolean
          created_at?: string
          id?: string
          notion?: boolean
          notion_data?: JSON | null
          onboarded_at?: string | null
          platform?: Database["public"]["Enums"]["enumplatform"] | null
          send_transcribe_email?: boolean
          usecase?: string[] | null
          user_email?: string | null
          user_id: string
          webhook?: boolean
          webhook_url?: string | null
          whatsapp?: boolean
          whatsapp_phone_number?: string | null
          zapier?: boolean
          zapier_hook?: string | null
        }
        Update: {
          auto_download_audio?: boolean
          created_at?: string
          id?: string
          notion?: boolean
          notion_data?: JSON | null
          onboarded_at?: string | null
          platform?: Database["public"]["Enums"]["enumplatform"] | null
          send_transcribe_email?: boolean
          usecase?: string[] | null
          user_email?: string | null
          user_id?: string
          webhook?: boolean
          webhook_url?: string | null
          whatsapp?: boolean
          whatsapp_phone_number?: string | null
          zapier?: boolean
          zapier_hook?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "settings_user_email_fkey"
            columns: ["user_email"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["email"]
          },
          {
            foreignKeyName: "settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      style_categories: {
        Row: {
          category: string
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          category: string
          created_at?: string
          id?: string
          name?: string | null
        }
        Update: {
          category?: string
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      style_usecases: {
        Row: {
          created_at: string
          id: string
          usecase: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          usecase?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          usecase?: string | null
        }
        Relationships: []
      }
      styles: {
        Row: {
          category_default: boolean
          category_id: string | null
          created_at: string
          icon: string | null
          id: string
          order: number | null
          output_length: string | null
          prompt: string
          title: string
          tone: string | null
          type: Database["public"]["Enums"]["enumnotecontent"] | null
          usecase_default: boolean
          usecase_id: string | null
          user_id: string | null
          writing_style: string | null
        }
        Insert: {
          category_default?: boolean
          category_id?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          order?: number | null
          output_length?: string | null
          prompt: string
          title: string
          tone?: string | null
          type?: Database["public"]["Enums"]["enumnotecontent"] | null
          usecase_default?: boolean
          usecase_id?: string | null
          user_id?: string | null
          writing_style?: string | null
        }
        Update: {
          category_default?: boolean
          category_id?: string | null
          created_at?: string
          icon?: string | null
          id?: string
          order?: number | null
          output_length?: string | null
          prompt?: string
          title?: string
          tone?: string | null
          type?: Database["public"]["Enums"]["enumnotecontent"] | null
          usecase_default?: boolean
          usecase_id?: string | null
          user_id?: string | null
          writing_style?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "styles_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "style_categories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "styles_usecase_id_fkey"
            columns: ["usecase_id"]
            isOneToOne: false
            referencedRelation: "style_usecases"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "styles_user_id_fkey1"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      tags: {
        Row: {
          created_at: string
          id: string
          name: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          name?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          name?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "styles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          auth_provider: string | null
          created_at: string
          default_style: string | null
          email: string
          fcm_token: string | null
          full_name: string | null
          id: string
          incorrect_words: string[] | null
          input_language: string | null
          joining_period:
            | Database["public"]["Enums"]["enumuserjoiningperiod"]
            | null
          notes_count: number
          output_language: string | null
          payment_platform:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
          plan: string
          plan_frequency: string | null
          renewal_date: string | null
          tags: string[] | null
          time_used: number
          user_type: Database["public"]["Enums"]["enumusertype"] | null
          utm: string | null
        }
        Insert: {
          auth_provider?: string | null
          created_at?: string
          default_style?: string | null
          email: string
          fcm_token?: string | null
          full_name?: string | null
          id: string
          incorrect_words?: string[] | null
          input_language?: string | null
          joining_period?:
            | Database["public"]["Enums"]["enumuserjoiningperiod"]
            | null
          notes_count?: number
          output_language?: string | null
          payment_platform?:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
          plan?: string
          plan_frequency?: string | null
          renewal_date?: string | null
          tags?: string[] | null
          time_used?: number
          user_type?: Database["public"]["Enums"]["enumusertype"] | null
          utm?: string | null
        }
        Update: {
          auth_provider?: string | null
          created_at?: string
          default_style?: string | null
          email?: string
          fcm_token?: string | null
          full_name?: string | null
          id?: string
          incorrect_words?: string[] | null
          input_language?: string | null
          joining_period?:
            | Database["public"]["Enums"]["enumuserjoiningperiod"]
            | null
          notes_count?: number
          output_language?: string | null
          payment_platform?:
            | Database["public"]["Enums"]["enumpaymentplatform"]
            | null
          plan?: string
          plan_frequency?: string | null
          renewal_date?: string | null
          tags?: string[] | null
          time_used?: number
          user_type?: Database["public"]["Enums"]["enumusertype"] | null
          utm?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_default_style_fkey"
            columns: ["default_style"]
            isOneToOne: false
            referencedRelation: "styles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_input_language_fkey"
            columns: ["input_language"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "users_output_language_fkey"
            columns: ["output_language"]
            isOneToOne: false
            referencedRelation: "languages"
            referencedColumns: ["code"]
          },
          {
            foreignKeyName: "users_plan_fkey"
            columns: ["plan"]
            isOneToOne: false
            referencedRelation: "plans"
            referencedColumns: ["plan"]
          },
        ]
      }
      users_styles: {
        Row: {
          created_at: string
          id: string
          style_id: string
          type: Database["public"]["Enums"]["enumuserstyletype"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          style_id: string
          type?: Database["public"]["Enums"]["enumuserstyletype"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          style_id?: string
          type?: Database["public"]["Enums"]["enumuserstyletype"]
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "users_styles_style_id_fkey"
            columns: ["style_id"]
            isOneToOne: false
            referencedRelation: "styles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_styles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      youtube_cookies: {
        Row: {
          cookie: string
          created_at: string
          error: string | null
          has_expired: boolean
          id: number
        }
        Insert: {
          cookie: string
          created_at?: string
          error?: string | null
          has_expired?: boolean
          id?: number
        }
        Update: {
          cookie?: string
          created_at?: string
          error?: string | null
          has_expired?: boolean
          id?: number
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_truncated_transcripts: {
        Args: {
          start_range: number
          end_range: number
        }
        Returns: {
          id: string
          title: string
          created_at: string
          audio_url: string
          attached_image_urls: string[]
          favourite: boolean
          folder_id: string
          is_ready: string
          note_type: Database["public"]["Enums"]["enumnotetype"]
          media_duration: number
          youtube_url: string
          truncated_transcript: string
        }[]
      }
    }
    Enums: {
      enumhandbooktype: "quiz" | "flashcard"
      enumnotecontent: "style" | "content"
      enumnotesusecase: "quiz" | "meeting"
      enumnotetype: "audio" | "upload" | "text" | "youtube" | "image"
      enumpaymentplatform: "lemonsqueezy" | "revenuecat"
      enumplatform: "android" | "ios" | "webapp" | "whatsapp"
      enumtypechat: "tag" | "folder" | "all" | "note"
      enumuserjoiningperiod: "pre_migration" | "post_migration"
      enumuserstyletype: "default" | "system" | "user"
      enumusertype: "student"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

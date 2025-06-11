"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  Monitor,
  Server,
  AlertTriangle,
  BarChart3,
  Settings,
  CheckCircle,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"

const slides = [
  {
    id: 1,
    title: "監視サーバ学習資料",
    subtitle: "初心者向け完全ガイド",
    content: (
      <div className="text-center space-y-8">
        <div className="mx-auto w-32 h-32 bg-blue-100 rounded-full flex items-center justify-center">
          <Monitor className="w-16 h-16 text-blue-600" />
        </div>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">監視サーバ学習資料</h1>
          <p className="text-xl text-gray-600">初心者向け完全ガイド</p>
          <div className="flex justify-center gap-4 mt-8">
            <Badge variant="secondary" className="px-4 py-2">
              基礎知識
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              実践演習
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Zabbix
            </Badge>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "学習目標",
    subtitle: "この資料で学べること",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">学習目標</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg">監視サーバとは何かを理解する</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg">監視サーバの必要性を学ぶ</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg">使用するソフトウェアを知る</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg">構築手順を習得する</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg">Zabbixの実践的な使い方</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <span className="text-lg">運用のベストプラクティス</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "監視サーバとは何か",
    subtitle: "基本概念の理解",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">監視サーバとは何か</h2>
        <div className="bg-blue-50 p-6 rounded-lg">
          <p className="text-lg text-center mb-6">
            <strong>監視サーバ（Monitoring Server）</strong>
            とは、ネットワーク上の複数のサーバーやネットワーク機器、アプリケーションの状態を継続的に監視し、異常を検知・通知するシステムです。
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <Server className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <p className="text-sm font-medium">24時間365日</p>
            <p className="text-xs text-gray-600">継続監視</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <AlertTriangle className="w-8 h-8 mx-auto mb-2 text-orange-600" />
            <p className="text-sm font-medium">リアルタイム</p>
            <p className="text-xs text-gray-600">状態把握</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <BarChart3 className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <p className="text-sm font-medium">自動通知</p>
            <p className="text-xs text-gray-600">異常検知</p>
          </div>
          <div className="text-center p-4 bg-white rounded-lg shadow">
            <Settings className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <p className="text-sm font-medium">データ蓄積</p>
            <p className="text-xs text-gray-600">履歴分析</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "監視対象",
    subtitle: "何を監視するのか",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">監視対象</h2>

        {/* 死活監視 */}
        <Card className="border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-600 border-b border-blue-200 pb-2">1. 死活監視</h3>
            <p className="text-sm text-gray-600 mb-4">
              サーバーやネットワーク機器が正常に稼働しているかを確認する基本的な監視
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Ping監視</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>ネットワーク接続性の確認
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  ICMPエコー要求/応答によるホストの応答確認、ネットワーク切断の即時検知
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">ポート監視</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>サービスの稼働確認
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  TCP/UDPポートへの接続確認によるサービス稼働状態の検証（80/TCP, 443/TCP等）
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-700">ハートビート</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>クラスタ構成の状態確認
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  定期的な生存信号によるクラスタノード間の状態確認、フェイルオーバー判断
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">DNS名前解決</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>名前解決サービスの確認
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  DNSクエリの応答確認によるネットワークサービスの基盤機能検証
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* リソース監視 */}
        <Card className="border-green-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-green-600 border-b border-green-200 pb-2">
              2. リソース監視
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              サーバーの物理/論理リソースの使用状況を監視し、パフォーマンス低下や容量不足を事前に検知
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">CPU使用率</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>負荷上昇によるサービス停止の防止
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  高負荷状態の早期発見により、レスポンス低下やシステムダウンを予防
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> ユーザー使用率、システム使用率、I/O待ち、ロードアベレージ
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">メモリ使用量</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>メモリ不足によるプロセス強制終了の防止
                </p>
                <p className="text-xs text-gray-500 mt-1">メモリリークやスワップ発生の早期検知でシステム安定性を確保</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> 物理メモリ使用率、スワップ使用率、ページイン/アウト頻度
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-700">ディスク容量</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>容量不足によるサービス停止の防止
                </p>
                <p className="text-xs text-gray-500 mt-1">ログファイル肥大化やデータ保存失敗を事前に防ぐ</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> 使用率、iノード使用率、ディスクI/O速度、読み書き待ち時間
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">ネットワーク帯域</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>通信遅延・切断の早期発見
                </p>
                <p className="text-xs text-gray-500 mt-1">帯域不足やネットワーク障害による影響範囲の把握</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> 送受信バイト数、パケット数、エラーパケット数、コリジョン
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* サービス・プロセス監視 */}
        <Card className="border-orange-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-600 border-b border-orange-200 pb-2">
              3. サービス・プロセス監視
            </h3>
            <p className="text-sm text-gray-600 mb-4">アプリケーションやシステムサービスの稼働状況と性能を監視</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-blue-700">Webサーバー（Apache, Nginx）</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>Webサイトの可用性確保
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  応答時間監視でユーザー体験の品質維持、プロセス監視でサービス継続性確保
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> 接続数、リクエスト数/秒、応答時間、エラーレート
                </p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-green-700">データベース（MySQL, PostgreSQL）</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>データの整合性とアクセス性能の維持
                </p>
                <p className="text-xs text-gray-500 mt-1">接続数監視でボトルネック回避、クエリ性能監視で応答速度確保</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> クエリ実行数、スロークエリ数、テーブルロック、キャッシュヒット率
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-orange-700">メールサーバー（SMTP）</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>メール送受信の確実性確保
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  キュー監視でメール遅延防止、認証エラー監視でセキュリティ確保
                </p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> メールキュー長、配送遅延、認証失敗数、スパム検知数
                </p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h4 className="font-semibold text-purple-700">アプリケーションサーバー</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>業務アプリケーションの安定稼働
                </p>
                <p className="text-xs text-gray-500 mt-1">アプリケーションプロセスの監視によるサービス継続性の確保</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> JVMヒープ使用量、スレッド数、セッション数、トランザクション応答時間
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 追加監視項目 */}
        <Card className="border-purple-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-purple-600 border-b border-purple-200 pb-2">
              4. 追加監視項目
            </h3>
            <p className="text-sm text-gray-600 mb-4">システムの安全性と信頼性を高めるための追加的な監視項目</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-red-700">セキュリティ</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>不正アクセス・攻撃の早期発見
                </p>
                <p className="text-xs text-gray-500 mt-1">ログイン失敗回数、異常なトラフィックパターンの監視</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> ログイン試行失敗、ファイアウォールルール違反、権限昇格、ファイル改ざん
                </p>
              </div>
              <div className="border-l-4 border-indigo-500 pl-4">
                <h4 className="font-semibold text-indigo-700">バックアップ</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>データ保護の確実性確保
                </p>
                <p className="text-xs text-gray-500 mt-1">バックアップジョブの成功/失敗監視、データ整合性チェック</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> バックアップ完了状態、所要時間、サイズ、復元テスト結果
                </p>
              </div>
              <div className="border-l-4 border-teal-500 pl-4">
                <h4 className="font-semibold text-teal-700">温度・電源</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>ハードウェア障害の予防
                </p>
                <p className="text-xs text-gray-500 mt-1">サーバー室温度、UPS状態監視でハードウェア保護</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> CPU温度、サーバールーム温湿度、UPSバッテリー残量、電源冗長性
                </p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-yellow-700">ログ監視</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>システム異常の早期発見
                </p>
                <p className="text-xs text-gray-500 mt-1">エラーログやイベントログの監視によるトラブルの早期検知</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong>{" "}
                  エラーログ出現頻度、特定キーワード検出、syslogメッセージ、Windowsイベントログ
                </p>
              </div>
              <div className="border-l-4 border-pink-500 pl-4">
                <h4 className="font-semibold text-pink-700">SSL証明書</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>セキュア通信の維持
                </p>
                <p className="text-xs text-gray-500 mt-1">証明書の有効期限監視による通信暗号化の継続的確保</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> 有効期限、証明書の整合性、暗号化強度、TLSバージョン
                </p>
              </div>
              <div className="border-l-4 border-cyan-500 pl-4">
                <h4 className="font-semibold text-cyan-700">SLA監視</h4>
                <p className="text-sm text-gray-600 mt-1">
                  <strong>目的：</strong>サービス品質の保証
                </p>
                <p className="text-xs text-gray-500 mt-1">サービスレベル合意に基づく可用性と性能の継続的な監視</p>
                <p className="text-xs text-blue-600 mt-1">
                  <strong>監視項目例：</strong> 稼働率、平均応答時間、障害復旧時間、メンテナンス時間
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 監視設計のポイント */}
        <Card className="bg-blue-50 border-blue-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-blue-700">監視設計のポイント</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">効果的な監視のために</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                    <span>必要最小限の監視項目から始める</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                    <span>環境に合わせた閾値設定を行う</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mt-1"></div>
                    <span>定期的な見直しと調整を実施する</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-blue-600 mb-2">監視の階層化</h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <span>インフラ層（ハードウェア、ネットワーク）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <span>プラットフォーム層（OS、ミドルウェア）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-green-500 mt-1"></div>
                    <span>アプリケーション層（業務システム）</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: 5,
    title: "なぜ監視サーバが必要なのか",
    subtitle: "ビジネス価値と重要性",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">なぜ監視サーバが必要なのか</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
              <h3 className="text-xl font-semibold text-red-700 mb-3">監視なしの場合</h3>
              <ul className="space-y-2 text-red-600">
                <li>• 障害に気づかない</li>
                <li>• ユーザーからの報告で発覚</li>
                <li>• 長時間のサービス停止</li>
                <li>• 信頼性の低下</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-500">数時間〜数日</div>
              <p className="text-gray-600">障害発見まで</p>
            </div>
          </div>
          <div className="space-y-6">
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
              <h3 className="text-xl font-semibold text-green-700 mb-3">監視ありの場合</h3>
              <ul className="space-y-2 text-green-600">
                <li>• 即座に障害を検知</li>
                <li>• 自動的な通知</li>
                <li>• 迅速な対応開始</li>
                <li>• サービス継続性の確保</li>
              </ul>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-500">数分</div>
              <p className="text-gray-600">障害発見まで</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "主要な監視ソフトウェア",
    subtitle: "ツールの比較と選択",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">主要な監視ソフトウェア</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Zabbix</h3>
                  <Badge variant="secondary">オープンソース</Badge>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• 高機能・スケーラブル</li>
                <li>• エージェント型・エージェントレス型対応</li>
                <li>• GPL v2ライセンス（無料）</li>
                <li>• 豊富なテンプレート</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Server className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Nagios</h3>
                  <Badge variant="secondary">老舗ツール</Badge>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• プラグイン豊富</li>
                <li>• 主にエージェントレス型</li>
                <li>• GPL v2ライセンス（Core版無料）</li>
                <li>• 安定性に定評</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Prometheus + Grafana</h3>
                  <Badge variant="secondary">クラウドネイティブ</Badge>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• 時系列データベース</li>
                <li>• Kubernetes対応</li>
                <li>• Apache 2.0ライセンス（無料）</li>
                <li>• 美しいダッシュボード</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">PRTG</h3>
                  <Badge variant="secondary">Windows特化</Badge>
                </div>
              </div>
              <ul className="space-y-2 text-sm">
                <li>• GUI操作が簡単</li>
                <li>• SNMP、WMI対応</li>
                <li>• 商用（100センサーまで無料）</li>
                <li>• Windows環境に最適</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    ),
  },
  {
    id: 7,
    title: "Zabbix構築手順",
    subtitle: "実践的な環境構築",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">Zabbix構築手順</h2>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold">環境準備</h3>
              <p className="text-sm text-gray-600">AlmaLinux 9、ファイアウォール設定</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold">データベース構築</h3>
              <p className="text-sm text-gray-600">MariaDB/MySQL、ユーザー作成</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-lg">
            <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold">Zabbixインストール</h3>
              <p className="text-sm text-gray-600">リポジトリ追加、パッケージインストール</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-purple-50 rounded-lg">
            <div className="w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
              4
            </div>
            <div>
              <h3 className="font-semibold">設定とテスト</h3>
              <p className="text-sm text-gray-600">設定ファイル編集、サービス起動</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h4 className="font-semibold mb-2">主要コマンド例：</h4>
          <code className="text-sm bg-black text-green-400 p-2 rounded block">
            sudo dnf install -y zabbix-server-mysql zabbix-web-mysql
          </code>
        </div>
      </div>
    ),
  },
  {
    id: 8,
    title: "実践課題",
    subtitle: "ハンズオン演習",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">実践課題</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="border-2 border-blue-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-600">課題1: 環境構築</h3>
              <ul className="space-y-2 text-sm">
                <li>• AlmaLinux上にZabbix構築</li>
                <li>• 監視対象サーバーの追加</li>
                <li>• エージェントの設定</li>
                <li>• 基本監視項目の確認</li>
              </ul>
              <Badge className="mt-4">初級</Badge>
            </CardContent>
          </Card>
          <Card className="border-2 border-green-200">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-green-600">課題2: カスタム監視</h3>
              <ul className="space-y-2 text-sm">
                <li>• Webサーバー応答時間監視</li>
                <li>• カスタムトリガー作成</li>
                <li>• メール通知設定</li>
                <li>• ダッシュボード作成</li>
              </ul>
              <Badge className="mt-4">中級</Badge>
            </CardContent>
          </Card>
        </div>
        <Card className="border-2 border-orange-200">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-4 text-orange-600">ワーク課題</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-3 bg-orange-50 rounded">
                <h4 className="font-medium">Agent比較</h4>
                <p className="text-xs text-gray-600">zabbix-agent vs agent2</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded">
                <h4 className="font-medium">監視項目設計</h4>
                <p className="text-xs text-gray-600">何をどう監視するか</p>
              </div>
              <div className="text-center p-3 bg-orange-50 rounded">
                <h4 className="font-medium">運用設計</h4>
                <p className="text-xs text-gray-600">アラート設計・通知設定</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    ),
  },
  {
    id: 9,
    title: "Zabbix設定パラメーターシート",
    subtitle: "実践課題実装のための詳細設定",
    content: (
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">Zabbix設定パラメーターシート</h2>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <p className="text-sm text-blue-800">
            このパラメーターシートは実践課題でZabbixを構築する際に必要な設定値をまとめたものです。
            環境に合わせて適宜変更してください。
          </p>
        </div>

        <div className="space-y-8">
          {/* サーバー環境設定 */}
          <div>
            <h3 className="text-xl font-semibold text-blue-700 mb-4 border-b border-blue-200 pb-2">
              1. サーバー環境設定
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">パラメーター</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">設定値</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">説明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">OS</td>
                    <td className="px-4 py-2 text-sm">AlmaLinux 9</td>
                    <td className="px-4 py-2 text-sm text-gray-500">最小インストール + 標準パッケージ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ホスト名</td>
                    <td className="px-4 py-2 text-sm">zabbix-server</td>
                    <td className="px-4 py-2 text-sm text-gray-500">サーバーの識別名</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">IPアドレス</td>
                    <td className="px-4 py-2 text-sm">192.168.1.10</td>
                    <td className="px-4 py-2 text-sm text-gray-500">固定IPを推奨</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">メモリ</td>
                    <td className="px-4 py-2 text-sm">8GB以上</td>
                    <td className="px-4 py-2 text-sm text-gray-500">小〜中規模環境向け</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ディスク</td>
                    <td className="px-4 py-2 text-sm">50GB以上</td>
                    <td className="px-4 py-2 text-sm text-gray-500">履歴データ保存用</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* データベース設定 */}
          <div>
            <h3 className="text-xl font-semibold text-green-700 mb-4 border-b border-green-200 pb-2">
              2. データベース設定
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">パラメーター</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">設定値</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">説明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBタイプ</td>
                    <td className="px-4 py-2 text-sm">MariaDB 10.5+</td>
                    <td className="px-4 py-2 text-sm text-gray-500">AlmaLinux 9標準</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DB名</td>
                    <td className="px-4 py-2 text-sm">zabbix</td>
                    <td className="px-4 py-2 text-sm text-gray-500">Zabbix用データベース</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBユーザー</td>
                    <td className="px-4 py-2 text-sm">zabbix</td>
                    <td className="px-4 py-2 text-sm text-gray-500">接続用アカウント</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBパスワード</td>
                    <td className="px-4 py-2 text-sm">zabbix_pwd</td>
                    <td className="px-4 py-2 text-sm text-gray-500">本番環境では強固なパスワードを使用</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">文字コード</td>
                    <td className="px-4 py-2 text-sm">utf8mb4</td>
                    <td className="px-4 py-2 text-sm text-gray-500">日本語対応</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">照合順序</td>
                    <td className="px-4 py-2 text-sm">utf8mb4_bin</td>
                    <td className="px-4 py-2 text-sm text-gray-500">Zabbix推奨設定</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Zabbixサーバー設定 */}
          <div>
            <h3 className="text-xl font-semibold text-orange-700 mb-4 border-b border-orange-200 pb-2">
              3. Zabbixサーバー設定
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">パラメーター</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">設定値</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">説明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ListenPort</td>
                    <td className="px-4 py-2 text-sm">10051</td>
                    <td className="px-4 py-2 text-sm text-gray-500">Zabbixサーバーのリスニングポート</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBHost</td>
                    <td className="px-4 py-2 text-sm">localhost</td>
                    <td className="px-4 py-2 text-sm text-gray-500">DBサーバーのホスト名</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBName</td>
                    <td className="px-4 py-2 text-sm">zabbix</td>
                    <td className="px-4 py-2 text-sm text-gray-500">使用するDB名</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBUser</td>
                    <td className="px-4 py-2 text-sm">zabbix</td>
                    <td className="px-4 py-2 text-sm text-gray-500">DB接続ユーザー</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">DBPassword</td>
                    <td className="px-4 py-2 text-sm">zabbix_pwd</td>
                    <td className="px-4 py-2 text-sm text-gray-500">DB接続パスワード</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">StartPollers</td>
                    <td className="px-4 py-2 text-sm">5</td>
                    <td className="px-4 py-2 text-sm text-gray-500">ポーラープロセス数</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">StartTrappers</td>
                    <td className="px-4 py-2 text-sm">5</td>
                    <td className="px-4 py-2 text-sm text-gray-500">トラッパープロセス数</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">CacheSize</td>
                    <td className="px-4 py-2 text-sm">32M</td>
                    <td className="px-4 py-2 text-sm text-gray-500">設定キャッシュサイズ</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">Timeout</td>
                    <td className="px-4 py-2 text-sm">4</td>
                    <td className="px-4 py-2 text-sm text-gray-500">処理タイムアウト（秒）</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* エージェント設定 */}
          <div>
            <h3 className="text-xl font-semibold text-purple-700 mb-4 border-b border-purple-200 pb-2">
              4. Zabbixエージェント設定
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">パラメーター</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">設定値</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">説明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">Server</td>
                    <td className="px-4 py-2 text-sm">192.168.1.10</td>
                    <td className="px-4 py-2 text-sm text-gray-500">Zabbixサーバーのアドレス</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ServerActive</td>
                    <td className="px-4 py-2 text-sm">192.168.1.10</td>
                    <td className="px-4 py-2 text-sm text-gray-500">アクティブチェック用サーバー</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">Hostname</td>
                    <td className="px-4 py-2 text-sm">web-server-01</td>
                    <td className="px-4 py-2 text-sm text-gray-500">監視対象サーバーのホスト名</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ListenPort</td>
                    <td className="px-4 py-2 text-sm">10050</td>
                    <td className="px-4 py-2 text-sm text-gray-500">エージェントのリスニングポート</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">EnableRemoteCommands</td>
                    <td className="px-4 py-2 text-sm">0</td>
                    <td className="px-4 py-2 text-sm text-gray-500">リモートコマンド実行（0=無効）</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">LogFile</td>
                    <td className="px-4 py-2 text-sm">/var/log/zabbix/zabbix_agent2.log</td>
                    <td className="px-4 py-2 text-sm text-gray-500">ログファイルパス</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 監視項目設定 */}
          <div>
            <h3 className="text-xl font-semibold text-red-700 mb-4 border-b border-red-200 pb-2">
              5. 基本監視項目設定
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">監視項目</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">キー</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">間隔</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">閾値（警告/危険）</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">CPU使用率</td>
                    <td className="px-4 py-2 text-sm">system.cpu.util</td>
                    <td className="px-4 py-2 text-sm">1m</td>
                    <td className="px-4 py-2 text-sm">80% / 90%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">メモリ使用率</td>
                    <td className="px-4 py-2 text-sm">vm.memory.util</td>
                    <td className="px-4 py-2 text-sm">1m</td>
                    <td className="px-4 py-2 text-sm">80% / 90%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ディスク使用率</td>
                    <td className="px-4 py-2 text-sm">vfs.fs.size[/,pused]</td>
                    <td className="px-4 py-2 text-sm">5m</td>
                    <td className="px-4 py-2 text-sm">80% / 90%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">ロードアベレージ</td>
                    <td className="px-4 py-2 text-sm">system.cpu.load</td>
                    <td className="px-4 py-2 text-sm">1m</td>
                    <td className="px-4 py-2 text-sm">5 / 10</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">プロセス数</td>
                    <td className="px-4 py-2 text-sm">proc.num</td>
                    <td className="px-4 py-2 text-sm">1m</td>
                    <td className="px-4 py-2 text-sm">300 / 500</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">HTTPサービス</td>
                    <td className="px-4 py-2 text-sm">net.tcp.service[http]</td>
                    <td className="px-4 py-2 text-sm">1m</td>
                    <td className="px-4 py-2 text-sm">0 / 0</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* アラート設定 */}
          <div>
            <h3 className="text-xl font-semibold text-teal-700 mb-4 border-b border-teal-200 pb-2">6. アラート設定</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">設定項目</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">値</th>
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-600">説明</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">メディアタイプ</td>
                    <td className="px-4 py-2 text-sm">Email</td>
                    <td className="px-4 py-2 text-sm text-gray-500">通知方法</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">SMTPサーバー</td>
                    <td className="px-4 py-2 text-sm">smtp.example.com</td>
                    <td className="px-4 py-2 text-sm text-gray-500">メールサーバー</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">送信元アドレス</td>
                    <td className="px-4 py-2 text-sm">zabbix@example.com</td>
                    <td className="px-4 py-2 text-sm text-gray-500">通知メールの送信元</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">送信先アドレス</td>
                    <td className="px-4 py-2 text-sm">admin@example.com</td>
                    <td className="px-4 py-2 text-sm text-gray-500">通知先メールアドレス</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">通知期間</td>
                    <td className="px-4 py-2 text-sm">1-7,00:00-24:00</td>
                    <td className="px-4 py-2 text-sm text-gray-500">24時間365日</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 text-sm font-medium">重要度</td>
                    <td className="px-4 py-2 text-sm">警告以上</td>
                    <td className="px-4 py-2 text-sm text-gray-500">通知する重要度</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg mt-6">
          <h4 className="font-semibold text-yellow-800 mb-2">注意事項</h4>
          <ul className="list-disc pl-5 text-sm text-yellow-800 space-y-1">
            <li>本番環境では、セキュリティを考慮したパスワード設定を行ってください</li>
            <li>監視項目の閾値は環境に合わせて適宜調整が必要です</li>
            <li>大規模環境では、プロキシの導入やサーバーリソースの増強を検討してください</li>
          </ul>
        </div>
      </div>
    ),
  },

  {
    id: 10,
    title: "まとめ",
    subtitle: "学習のポイント",
    content: (
      // 既存のまとめスライドの内容はそのまま
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-center mb-8">まとめ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-600">重要なポイント</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span>監視は予防保守の基本</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span>適切な閾値設定が重要</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span>段階的なアラート設計</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                <span>定期的な設定見直し</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-600">次のステップ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full mt-0.5"></div>
                <span>実際の環境での構築練習</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full mt-0.5"></div>
                <span>他の監視ツールの学習</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full mt-0.5"></div>
                <span>クラウド監視の理解</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-500 rounded-full mt-0.5"></div>
                <span>運用自動化の検討</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-blue-50 to-green-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-800 mb-2">お疲れ様でした！</h3>
          <p className="text-gray-600">監視サーバの基礎知識を習得できました</p>
        </div>
      </div>
    ),
  },
]

export default function MonitoringServerSlides() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [showOutline, setShowOutline] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setShowOutline(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Monitor className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-semibold text-gray-800">監視サーバ学習資料</h1>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                {currentSlide + 1} / {slides.length}
              </span>
              <Button variant="outline" size="sm" onClick={() => setShowOutline(!showOutline)}>
                <Menu className="w-4 h-4 mr-2" />
                目次
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Outline Sidebar */}
      {showOutline && (
        <div className="fixed inset-y-0 right-0 w-80 bg-white shadow-lg z-50 overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">目次</h2>
              <Button variant="ghost" size="sm" onClick={() => setShowOutline(false)}>
                ×
              </Button>
            </div>
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentSlide === index ? "bg-blue-100 text-blue-700 border-l-4 border-blue-500" : "hover:bg-gray-50"
                  }`}
                >
                  <div className="text-sm font-medium">{slide.title}</div>
                  <div className="text-xs text-gray-500">{slide.subtitle}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="min-h-[600px] shadow-lg">
          <CardContent className="p-12">{slides[currentSlide].content}</CardContent>
        </Card>
      </main>

      {/* Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Button
              variant="outline"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="w-4 h-4" />
              前へ
            </Button>

            <div className="flex items-center gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              className="flex items-center gap-2"
            >
              次へ
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

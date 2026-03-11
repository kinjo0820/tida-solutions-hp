---
allowed-tools: Bash(gh issue view:*),Bash(gh search:*),Bash(gh issue list:*),Bash(gh pr comment:*),Bash(gh pr diff:*),Bash(gh pr view:*),Bash(gh pr list:*),Bash(gh api:*),Bash(jq:*),WebFetch,WebSearch
description: 5つの観点 (品質、パフォーマンス、テスト、ドキュメント、セキュリティ) からPRを包括的にレビューする
argument-hint: [owner/repo] [pr-number]
---

REPO: $1
PR NUMBER: $2

## ステップ 1: プロジェクトルールの読み込み

最初に、プロジェクトルートの CLAUDE.md ファイルを Read ツールで読み込み、プロジェクト固有のルール、開発環境、設計方針を確認する。この情報は、後続のすべてのサブエージェントに共有される。

## ステップ 2: サブエージェントによる包括的レビュー

以下の主要領域についてサブエージェントを使用して包括的なコードレビューを実行する:

- code-quality-reviewer (コード品質レビュアー)
- performance-reviewer (パフォーマンスレビュアー)
- test-coverage-reviewer (テストカバレッジレビュアー)
- documentation-accuracy-reviewer (ドキュメント正確性レビュアー)
- security-code-reviewer (セキュリティコードレビュアー)

**重要**: 各サブエージェントには、ステップ1で読み込んだ CLAUDE.md の内容を前提知識として提供する。各エージェント内で CLAUDE.md を再読み込みする必要はない。

## ステップ 3: フィードバックの統合と投稿

- 各エージェントからの報告を統合し、以下のルールに従って投稿する。
- **具体的なコードへの指摘（行単位で特定可能なもの）**: 
  必ず `mcp__github_inline_comment__create_inline_comment` ツールを使用すること。
  - `path`: 修正が必要なファイルのパス
  - `line`: 指摘箇所の行番号
  - `body`: 指摘内容（改善案や理由を簡潔に記述）
- **全般的な所見・称賛・サマリー**:
  `Bash(gh pr comment ...)` を使用して、PR 全体へのトップレベルコメントとして投稿する。
- **最終判定**:
  レビューの最後に、Approve（承認）か Request Changes（修正依頼）かを明示する。
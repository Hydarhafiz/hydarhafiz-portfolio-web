---
slug: anotheredenai
title: AnotherEdenAI — A Roster-Aware GraphRAG Team Recommender with Deterministic Guardrails
kind: case-study
hierarchy: primary-personal
status: actively developed
period: January 2026 – Present
context: Personal project
summary: An actively developed GraphRAG team recommender that keeps roster legality and candidate construction deterministic before bounded LLM refinement.
role: Personal project owner and developer
capabilities:
  - name: Typed graph retrieval and legal candidates
    evidence: Neo4j-backed facts, deterministic candidate generation, and legality/feasibility checks before model analysis.
  - name: Bounded LLM refinement
    evidence: LangGraph orchestration, provider-neutral analyzer adapters, bounded correction, token/output controls, and usage capture.
  - name: Validation and explicit fallback
    evidence: Typed output contracts, graph-backed legality checks, degraded backend fallback, and FastAPI/HTMX/SSE delivery.
  - name: Coverage and evaluation evidence
    evidence: 367/367 canonical character forms/styles with complete legal-kit data and 31 evaluation cases, including infeasible zero-call cases.
disclosure:
  review_state: approved
  allowed_claims:
    - actively developed personal project status
    - public repository implementation visible at the reviewed source revision
    - graph ETL, typed Neo4j retrieval, deterministic candidate generation, LangGraph orchestration, structured validation, bounded correction/degraded fallback, provider adapters, token/output controls, evaluation harness, and SSE progress
    - exploration of roster-constrained, source-grounded lineup recommendations
  excluded_claims:
    - production maturity or production readiness
    - completed evaluation or proven recommendation quality
    - live deployment or public service availability
    - guaranteed factuality or measured cost/performance improvement
    - claims based only on the repository's stale maturity wording
  maturity_boundary: Keep AnotherEdenAI labelled as actively developed until current evaluation and deployment gates are complete.
sources:
  - https://github.com/Hydarhafiz/AnotherEdenAI
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/etl/loader.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/workflow/graph.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/workflow/state.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/workflow/nodes/format.py
  - https://github.com/Hydarhafiz/AnotherEdenAI/blob/main/src/web/streaming.py
  - docs/core/milestone.md Feature 7D and its human-approved content contract
---

## Summary

AnotherEdenAI is an actively developed GraphRAG team recommender for the JRPG Another Eden. It explores how to use an LLM for recommendations without allowing it to become the authority for roster legality, mechanics, or candidate construction.

## Problem and principle

A natural-language recommendation system needs to connect a player's roster to structured game facts without allowing unconstrained model output to become the final answer. **The model may reason about legal candidates; it may not redefine what is legal.**

## Architecture

The public implementation follows this flow:

`User question and roster → graph retrieval → deterministic candidate generation → legality and feasibility checks → bounded analyzer call → validation and correction → deterministic fallback → explanation`

ETL transforms selected source data into an idempotent Neo4j graph. Typed retrieval resolves canonical game facts without placing user prose in graph queries. Deterministic backend logic derives role scores, build packages, and legal lineup candidates before a bounded LangGraph analyzer call. Structured validation permits bounded correction, while a deterministic fallback retains backend candidates or returns a classified failure when provider refinement is unavailable. FastAPI and HTMX/SSE stream progress and the typed result.

## Coverage and deterministic feasibility

The accepted portfolio evidence snapshot contains **367/367 canonical character forms/styles** with complete legal-kit data. The feasibility evaluation contains **31 evaluation cases**; infeasible cases make **zero analyzer calls**. This is an engineering control, not a claim that an AI successfully answered 31 questions.

## Reliability boundary

Typed retrieval, deterministic candidate generation, legality and feasibility checks, bounded analysis, final legality validation, and explicit fallback keep the model inside a constrained role. Token/output limits, usage capture, and prompt-size guards constrain cost exposure without claiming measured savings.

## Held-out extraction evaluation

On held-out evidence, one extraction change increased recall from **76.1% to 93.5%**, while precision changed from **66.0% to 37.1%**. The recall increase came with substantially more false positives, so I kept the change at a **human-review checkpoint** rather than presenting 93.5% recall alone as an accuracy improvement.

## Current status and limitations

The public repository contains implemented ETL, typed graph retrieval, deterministic candidate generation, analyzer adapters, validation, fallback, streaming, automated tests, and an opt-in evaluation harness. The project remains actively developed; evaluation gates, recommendation-quality decisions, graph quality, cost controls, and deployment decisions remain open.

This case study does not claim production readiness, proven recommendation quality, a live deployment, guaranteed outcomes, measured cost/performance improvement, 93.5% accuracy, accepted final quality, or reduced human-review effort.

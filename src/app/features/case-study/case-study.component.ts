import { Component, inject, computed } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { PROJECTS_DATA } from '../../core/data/portfolio.data';
import { ProjectCaseStudy } from '../../core/models/portfolio.models';

@Component({
  selector: 'app-case-study',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './case-study.component.html',
  styleUrl: './case-study.component.scss'
})
export class CaseStudyComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly sanitizer = inject(DomSanitizer);

  readonly projectId = computed(() => this.route.snapshot.paramMap.get('id'));

  readonly project = computed<ProjectCaseStudy | undefined>(() => {
    const id = this.projectId();
    return PROJECTS_DATA.find(p => p.id === id);
  });

  readonly sanitizedSvgDiagram = computed<SafeHtml>(() => {
    const p = this.project();
    if (p && p.architectureDiagramSvg) {
      return this.sanitizer.bypassSecurityTrustHtml(p.architectureDiagramSvg);
    }
    return '';
  });
}

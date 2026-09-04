const supportedProfiles = ["default", "backend", "cloud", "ai"];

function uniqueById(items, label) {
  const map = new Map();
  for (const item of items) {
    if (!item?.id || map.has(item.id)) {
      throw new Error(`${label} must contain unique non-empty IDs.`);
    }
    map.set(item.id, item);
  }
  return map;
}

function selectById(ids, available, label) {
  return ids.map((id) => {
    const item = available.get(id);
    if (!item) throw new Error(`Unknown ${label} ID: ${id}`);
    return item;
  });
}

export function resolveCareerProfile(source, profileId = "default") {
  if (!supportedProfiles.includes(profileId)) {
    throw new Error(`Unknown resume profile: ${profileId}`);
  }

  const profile = source.profiles?.[profileId];
  if (!profile) throw new Error(`Missing resume profile: ${profileId}`);

  const groups = uniqueById(source.capabilityGroups, "Capability groups");
  const capabilities = Object.entries(profile.capabilities).map(([groupId, itemIds]) => {
    const group = groups.get(groupId);
    if (!group) throw new Error(`Unknown capability group ID: ${groupId}`);
    const items = uniqueById(group.items, `Capability group ${groupId}`);
    return {
      category: group.category,
      items: selectById(itemIds, items, `capability in ${groupId}`).map((item) => item.label),
    };
  });

  const experience = source.experience.map((entry) => {
    const bullets = uniqueById(entry.bullets, `Experience ${entry.id} bullets`);
    const selected = profile.experienceBullets?.[entry.id];
    if (!selected) throw new Error(`Missing experience selection for ${entry.id} in ${profileId}`);
    return {
      role: entry.role,
      organization: entry.organization,
      dates: entry.dates,
      bullets: selectById(selected, bullets, `experience bullet in ${entry.id}`).map((bullet) => bullet.text),
    };
  });

  const projects = source.projects.map((project) => {
    const bullets = uniqueById(project.bullets, `Project ${project.id} bullets`);
    const selected = profile.projectBullets?.[project.id];
    if (!selected) throw new Error(`Missing project selection for ${project.id} in ${profileId}`);
    return {
      name: project.name,
      context: project.context,
      dates: project.dates,
      url: project.url,
      bullets: selectById(selected, bullets, `project bullet in ${project.id}`).map((bullet) => bullet.text),
    };
  });

  return {
    basics: { ...source.basics, title: profile.title },
    summary: profile.summary,
    capabilities,
    experience,
    projects,
    education: source.education,
    certifications: source.certifications,
  };
}

export function listCareerProfiles() {
  return [...supportedProfiles];
}
